let byId = (id) => { return document.getElementById( id ); };

let login = (ph,type,icon) => ({
  view: function() {
    return m("p.control.has-icons-left", [
      m(`input.login-input.input.is-small.is-success[placeholder='${ph}'][type='${type}']`),
      m("span.icon.is-small.is-left", 
        m(`i.fa.fa-${icon}`)  )
    ])
  }
})
let loginBtn = ({
  view: function() {
    return m("a.button.is-primary.is-inverted", [
      m("span.icon",
        m("i.fa.fa-check") ),
      m("span", "Login")
    ])
  }
})
m.mount( byId("login_user"),login('Username','text','user'))
m.mount( byId("login_pass"),login('Password','password','lock'))
m.mount( byId("login_btn" ),loginBtn)
