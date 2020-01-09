<script>
import { curRoute, router } from './router.js';

export let page = {
  path: '#home',
  name: 'Home'
}

const hash = window.location.hash;


const unsubscribe = curRoute.subscribe(value => {
	});


$ : {
  switch (location.hash) {
   case "#home":

    curRoute.set(router['#home']);
  break;

case "#web":
    curRoute.set(router['#web']);
      break;
     default:
       
       console.log("fuck my ass")
       break;
   }


}

function cock (x){

 switch (hash) {
   case "#home":

    curRoute.set(router['#home']);
  break;

case "#web":
    curRoute.set(router['#web']);
      break;
     default:
       
       console.log("fuck my ass")
       break;
   }
}


</script>
<style>
  a {
    text-transform: uppercase;
    text-decoration: underline;
    padding: 1rem;
  }
</style>

<a href={page.path} on:click|preventDefault={() => false}>{page.name}</a>
