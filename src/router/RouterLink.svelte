<script>
import { curRoute, router } from './router.js';

export let page = {
  path: '/home',
  name: 'Home'
}

  function redirectTo(event){
  console.log(event.target.pathname)
    if(Object.keys(router).includes(event.target.pathname)){
    // change current router path
    curRoute.set(event.target.pathname);
    // push the path into web browser history API
    window.history.pushState({path: page.path}, '', window.location.origin + page.path);
    } else {
      curRoute.set('/home');
      // push the path into web browser history API
      window.history.pushState({path: '/home'}, '', window.location.origin + '/home' );

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

<a href={page.path} on:click|preventDefault={redirectTo}>{page.name}</a>
