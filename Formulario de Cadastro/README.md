### Trabalho de Web 2 Bimestre 
 Sobre a parte feita em JavaScript, não consegui fazer funcionar. O codigo ainda está no arquivo, mas está dando erro, o meu objetivo 
 era fazer o olho magico para vez a senha quando clicasse e desver ela quando clicasse novamente.
 
 Primeiramente baixei um icone e havia posto ele embaixo da **label** do **input senha**(foi retirado):
 
```html
<i class="fa fa-eye" aria-hidden="true"></i>
```

Após isso comecei a fazer o CSS(está comentado no codigo ainda), utilizei a classe **.fa-eye** e fiz as modificações 
necessarias para ficar no local certo.

```css
.fa-eye{
    position: absolute;
    top: 30.5rem;
    right: 29.5rem;
    cursor: pointer;
}
```

Por ultimo ao fazer o JavaScript começou a vir muitos problemas, e não consegui o resultado que eu queria atingir.
A logica era que ao clicar se o **"type"** etivesse **_password_** ele fosse mudado para **_text_** e caso o contrario fizesse o inverso, 
mas acabou nao funcionando...


```javascript
var senha = document.querySelector('.senha')
var btn = document.querySelector('.fa-eye');

btn.onclick= () =>
{
    var inputSenha =document.querySelector("password")

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type", "text")
    } else {
        inputSenha.setAttribute("type", "password")  
    }

};
```

