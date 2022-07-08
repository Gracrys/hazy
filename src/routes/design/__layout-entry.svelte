<style lang=scss>
div{
    max-height: 70vh;
    overflow: auto;
}

 article{
  margin: auto;
  display: flex;
  background-color:#343434dc;

  flex-direction: column;
  align-items: center;

  img{
    width: 100%;
   
  }
  figure{
    position: relative;
    width: 100%;
}
.title{
    padding-top: 2rem;
    padding-bottom: 2rem
}

img.principal{
    float:left;
    margin: 1rem;
}
}
  
 </style>

<div class="container mt-4">
    <article class="card pt-2 mb-5">
        <slot></slot>
    </article>
</div>
