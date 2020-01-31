<script>

import RouterLink from '../../router/RouterLink.svelte';
import top from '~/../assets/topsters2.jpg'
</script>

<style lang="sass">
img
  width: 40%    
  margin: auto
  
section 
  max-height: 80vh
  overflow: auto
  margin-top: 1em
  scrollbar-width: none
  &::-webkit-scrollbar 
    display: none
    width: 2px
  &::-webkit-scrollbar-thumb 
  background-color: #c0ff33
  padding: 1.2em
  border-radius: 0.4em
  figure
    text-align: center
    display: flex
    justify-content: center
    flex-direction: column
  

 </style>

<section>
  <em>From time to time i used to do some reviews to albums, and write them down, wanted to make some blog but havent started this proyect yet, so for now, i just discuss in some music groups, from time to time, a new artist finds me and ask for some music recomendation or a review on how to improve its style... i am always open to these kind of requests.</em>
  <figure>
    <figcaption><h5>Here is my top 100 chart - updated jan / 2020</h5></figcaption>
    <img src={top} alt="">
  </figure>
</section>
