export default class UI {

    mostrarMenuProfile(){

        let menu = document.getElementById('profile-row');
        menu.style.display = 'none';

        if(menu != null){
            document.getElementById('button-profile').addEventListener('click', (even) =>{

                switch (menu.style.display) {
                    case 'none':
                        menu.style.display = 'block';
                        break;
                    case 'block':
                        menu.style.display = 'none';
                        break;
                    default:
                        console.log('Error revisa el codigo');
                        break;
                }                
            })
                 
        }
        
    }


}