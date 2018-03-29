var app = new Vue({
    el: '#wrapper',
    data: {
        title: "title",
        username: '09218013508',
        password: 'Topol1376',
        postBody: "username=soosk&password=piaz",
        name:'',
        lastName:'',
        email:'',
        pass:'',
        newPass:'',
        phone:''
    },
    methods: {
        login: function () {
            loginPost()
        }
        sgnUp: function () {
            signUpPost()
        }
    },
    created: function(){
        // document.addEventListener('keyup',this.escapeKeyListener);
    },
    destroyed: function(){
        // document.removeEventListener('keyup',this.escapeKeyListener);a
    }
});
// http://192.168.43.19:5000/api/test
function loginPost() {
    axios.post("https://api.edidaar.ir/v1/auth/login", {
        mobile: app.username,
        password: app.password
        }
        // "username="+app.username+"&"+ "password="+app.password
        )
        .then(response => {app.title = response.data;
            $('#termsModal').modal('show');
})
        .catch(e => {
                alert(e)
            }
        )
    function signUpPost() {
        axios.post("https://api.edidaar.ir/v1/auth/login", {
                given_name: app.name,
                last_name: app.lastName,
                email:app.email,
                mobile: app.mobile,
                password: app.pass
            }
            // "username="+app.username+"&"+ "password="+app.password
        )
            .then(response => {app.title = response.status;
        $('#termsModal').modal('show');
    })
    .catch(e => {
            alert(e)
        }
    )
    // async / await version (postPost() becomes async postPost())
    //
    // try {
    //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
    //     body: this.postBody
    //   })
    // } catch (e) {
    //   this.errors.push(e)
    // }
}