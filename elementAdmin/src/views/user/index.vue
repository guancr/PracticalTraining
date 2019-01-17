<template>
<div>
  <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="60">
      </el-table-column>
      <el-table-column label="头像" width="100">
        <template slot-scope="scope">
             <img :src="scope.row.avatar" alt="" style="width: 100%">
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.create_time | formatDate}}</span>
        </template>
      </el-table-column>      
      <el-table-column prop="username" label="姓名" width="80">
      </el-table-column>
      <el-table-column prop="profile" label="简介" width="150">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="120">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="150">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column label="角色" width="180">
        <template slot-scope="scope">
          <el-tag
            :key="tag"
            style="margin:1px 2px;"
            v-for="tag in scope.row.rolers">
            {{tag}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="权限" width="180">
        <template slot-scope="scope">
          <el-tag
            :key="tag"
            style="margin:1px 2px;"
            v-for="tag in scope.row.access">
            {{tag}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
            编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)" style="margin:2px 0">删除</el-button>
          <el-button size="mini" @click="handleRoler(scope.$index, scope.row)" style="margin:2px 0">修改角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="current"
      :pager-count="5"
      @current-change="handleChange"
      layout="prev, pager, next"
      :total="300">
    </el-pagination>
    <el-dialog :title="types=='edit'?'编辑用户信息':'修改用户角色'" :visible.sync="dialog">
      <el-form :model="currentUser" :rules="editRules" ref="form">
        <el-form-item v-if="types=='edit'" label="姓名" :label-width="formLabelWidth" prop="username">
          <el-input v-model="currentUser.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="types=='edit'" label="头像" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="123"
            :show-file-list="false">
            <img v-if="currentUser.avatar" :src="currentUser.avatar" class="avatar" style="width:50px;height:50px">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item v-if="types=='edit'" label="简介" :label-width="formLabelWidth" prop="profile">
          <el-input v-model="currentUser.profile" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="types=='edit'" label="手机号" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="currentUser.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="types=='edit'" label="邮箱" :label-width="formLabelWidth" prop="email">
          <el-input v-model="currentUser.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="types=='edit'" label="地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="currentUser.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item v-if="types=='roler'" label="我的角色" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            style="margin:1px 2px;"
            closable
            @close="deleteRoler(tag)"
            v-for="tag in myRolers">
            {{tag}}
          </el-tag>
        </el-form-item>
        <el-form-item v-if="types=='roler'" label="全部角色" :label-width="formLabelWidth">
          <el-tag
            :key="tag"
            style="margin:1px 2px;"
            v-for="tag in rolers">
            <span @click="addRoler(tag)">{{tag}}</span>         
          </el-tag>
        </el-form-item>
      </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialog = false">取 消</el-button>
      <el-button type="primary" @click="dialogsure">确 定</el-button>
    </div>
  </el-dialog>

</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    const profileValidator = (rule, value, callback) => {
      if (!value || value.length < 20) {
        callback(new Error("个人简历不能低于20个字"));
      } else {
        callback();
      }
    };

    const phoneValidator = (rule, value, callback) => {
      if (
        !/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };

    const emailValidator = (rule, value, callback) => {
      if (
        !/^[a-z0-9A-Z_.-]+@[a-z0-9A-Z-]+(\.[a-z0-9A-Z-]+)*\.[a-z0-9A-Z]{2,6}$/.test(
          value
        )
      ) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };

    return {
      current: 1,
      dialog: false,
      formLabelWidth: "120px",
      currentUser: {},
      editRules: {
        username: [{ trigger: "blur", required: false, message: "用户名必填" }],
        phone: [{ trigger: "blur", required: true, validator: phoneValidator }],
        profile: [
          { trigger: "blur", required: true, validator: profileValidator }
        ],
        email: [{ trigger: "blur", required: true, validator: emailValidator }],
        address: [{ trigger: "blur", required: true, message: "地址必填" }]
      },
      types: "", //弹框类型，edit表示修改信息，roler表示修改角色
      rolers: ["boss", "developer", "producter", "operater", "designer"],
      myRolers: []
    };
  },
  computed: {
    ...mapState({
      tableData: state => state.list.list
    })
  },
  created() {
    this.getUserList();
  },
  methods: {
    ...mapActions({
      getUserList: "list/getUserList",
      updateUserInfo: "list/updateUserInfo",
      deleteUser: "list/deleteUser",
      changeRoler: "list/changeRoler"
    }),
    handleChange(page) {
      this.current = page;
      this.getUserList({ page });
    },
    handleEdit(index, row) {
      this.types = "edit";
      this.currentUser = { ...row };
      this.dialog = true;
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
          let { id } = row;
          this.deleteUser({ uid: id })
            .then(res => {
              this.$message({
                message: res,
                center: true,
                type: "success"
              });
              this.getUserList({ page: this.current });
            })
            .catch(err => {
              this.$message({
                message: err,
                center: true,
                type: "error"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleRoler(index, row) {
      this.types = "roler";
      this.currentUser = { ...row };
      this.myRolers = [...row.rolers];
      this.dialog = true;
    },
    deleteRoler(roler) {
      let index = this.myRolers.findIndex(item => item == roler);
      this.myRolers.splice(index, 1);
    },
    addRoler(roler) {
      this.myRolers.push(roler);
      this.myRolers = [...new Set(this.myRolers)];
    },
    dialogsure() {
      this.dialog = false;
      if(this.types=='edit'){
        this.$refs.form.validate(valid => {
          if (valid) {
            let {id,username,profile,email,phone,address} = this.currentUser;
            this.updateUserInfo({ id, username, profile, email, phone, address }).then(res => {
                this.$message({
                  message: res,
                  center: true,
                  type: "success"
                });
                this.getUserList({ page: this.current });
              }).catch(err => {
                this.$message({
                  message: err,
                  center: true,
                  type: "error"
                });
              });
          }
        });
      }else if(this.types=='roler'){
        let {id} = this.currentUser;
          let rolersId = this.myRolers.map(item=>{
            return this.rolers.findIndex(value=>value==item)+1
          })
          this.changeRoler({uid: id, rolersId}).then(res=>{
            this.$message({
              message: res,
              center: true,
              type: 'success'
            });
            this.getUserList({page: this.current});
          }).catch(err=>{
            this.$message({
              message: err,
              center: true,
              type: 'error'
            });
          })
        }
      }
  }
};
</script>