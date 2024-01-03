import './App.css'

function App() {
 
  return (
    <>
      <h1>Cat Meme</h1>
      <div style={{ minHeight: "100vh" }}>
        <img
          src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-cat_23-2149214419.jpg"
          alt="cat1"
          height={200}
        />
        <img
          src="https://i.pinimg.com/736x/32/7e/db/327edb9a15b304efc264668ada03f725.jpg"
          alt="cat2"
          height={200}
        />
        <img
          src="https://pyxis.nymag.com/v1/imgs/d29/4a6/d8b19f15856697769dc1c586d59ce82bd8-22-cat-video-truth-smoking.rsquare.w400.jpg"
          alt="cat3"
          height={200}
        />
        <img
          src="https://www.boredpanda.com/blog/wp-content/uploads/2022/07/cat-virus-exe-funny-pics_wide-3-2-62d6aff9ab603.png"
          alt="cat4"
          height={200}
        />
        <p>When a user first visits the page, the images will be cached using the service worker.</p>
      </div>
    </>
  );
}

export default App
