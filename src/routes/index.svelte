<article>
  <div>
    <h3>Welcome! I'm 
      <b>
        <a href="/about">Gracrys</a>
      </b>
    </h3>
    <br>
    <h4>Ux Engineer, <a href="/web">developer</a>, UI / UX <a href="/design">designer</a> ,<br> 
      hobbyist <a href="/writings">writer</a> and music lover <br>  
      from Venezuela
    </h4>
  <center class="mt-5">
      <b >
     <i>
      «Techniques that make art»
     </i>
    </b>
    
 </center>

  </div>
</article>

<style lang=scss>
  article{
  width: 80%;
  margin: auto;
  margin-top: 10%;
  display: flex;
 } 
 div{
  display: inline;
  margin: auto;
  width: auto;
 }
 h3,h4{
  display: inline;
  margin: auto;
  a{
    position: relative;
    &::before{
      height: 0;  
      transition: height 0.6s;
      content: "";
      visibility: hidden;
    }
    &:hover::before{
        visibility: visible;
        background-color: #ffffff88;
        content: "";
        height: 1.2rem;
        position: absolute;
        left: 0;
        bottom: 8px;
        width: 100%;
        z-index: -1;

    }
  }
 }
 .block{
   display: block 
 }
 h3{
  display: block
 }

</style>