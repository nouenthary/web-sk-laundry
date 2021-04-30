<template>
    <div class="card-login">
        <a-card >
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
        >
            <a-form-item>
                <a-input
                    v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
                    placeholder="Username"
                >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                    v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                    type="password"
                    placeholder="Password"
                >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-checkbox
                    v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
                >
                    Remember me
                </a-checkbox>
                <a class="login-form-forgot" href="">
                    Forgot password
                </a>
                <a-button type="primary" html-type="submit" class="login-form-button">
                    Log in
                </a-button>
                Or
                <a href="">
                    register now!
                </a>
            </a-form-item>
        </a-form>
        </a-card>
    </div>
</template>

<script>

import User from "../../models/user";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
   computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log("Received values of form: ", values);
            if (values.username && values.password) {

                // this.$store.dispatch('auth.login', this.user).then(
                //     () => {
                //         this.$router.push('/');
                //     },
                //     error => {
                //         this.loading = false;
                //         this.message =
                //             (error.response && error.response.data) ||
                //             error.message ||
                //             error.toString();
                //     }
                // );
            }
        }
      });
    }
  }
};
</script>

<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.card-login {
  background-image: url("https://www.partselect.com/assets/content/58702/laundry-cheat-sheet-open-graph.png");
  min-height: 100vh;
  width: 100wv;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
