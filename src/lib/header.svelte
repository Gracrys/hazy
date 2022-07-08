 <script>
//   import arrow from '/icons/arrow.svg'
//import menu from '/icons/menu.svg'
// import down from '/icons/down.svg'
 </script>

 <header>
      <nav class="main_nav">
        <a href="http://codepen.io/gracrys">codepen</a>
        <a href="http://twitter.com/gracrys">twitter</a>
        <a href="http://github.com/gracrys">github</a>
        <!-- <a href="https://t.me/HazyG">telegram</a> -->
      </nav>
     
      <!-- <svelte:component this={router[hash] ? router[hash] : Home} /> -->
    </header>
 <div class="hamburger">
        <img src="/icons/menu.svg" alt="hamburger" title="main menu"> 
        <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About me</a></li>
          <li><a href="/web">Programming</a></li>
          <li><a href="/writings">Writings</a></li>
          <li class="nested">Designs <img src="/icons/down.svg" alt="nested menu" > 
            <ul>
              <li><a href="/design">UI / UX</a></li>
              <li><a href="/glitch">Glitch</a></li>
            </ul>
          </li>
        </nav>
      </div> 



<style lang="scss">
  nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: transparent;
    box-shadow: none;
    border: none;
    width: 100%;
    height: 56px;
    line-height: 56px;
  }
  section{
    @media screen and (max-width: 600px) {

    }
  }
  .logo{
    display:block;
    width: 120px;
    position: absolute;
    visibility: hidden;
  }
  .logo > img{
    width: 100%;
  }
.hamburger{
  display:flex;
  flex-direction: column;
  float: right;
    position: absolute;
    top: 1.6rem;
    right: 0;
  img{
    width: 3rem;
    margin: auto;
  }
  nav{
    align-items: flex-start;
    margin-top: 1rem;
  }
  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 0;
    overflow: hidden;
    min-height: 0;
    max-height: 0;
    transition: all 0.6s;
    transition: background-color .3s;
    float: none;
    padding: 0;
    li{
      list-style-type: none;
    }
    a{
      transition: background-color .3s;
      font-size: 1rem;
      color: #fff;
      display: block;
      padding: 0 15px;
      cursor: pointer;
    }
  }
  &:hover{
    nav > ul{
      height: auto;
      max-height: 100vh;
    }
  }
  .nested:hover ul{
      transition: all 1s;
      height: auto;
      max-height: 100vh;
    }

   
  .nested{
    img{
      width: 1rem;
    }
  }
  @media screen and (max-width: 600px) {
    display: none    }
  }

</style>