import './App.css';
import React, {useState} from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <div className="social-share">
					<span>Share:</span>
					<a
						href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
							`"${quote.content}" — ${quote.author}`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						title="Share on WhatsApp"
					>
						<img
              className='icon'
							src="https://img.icons8.com/ios-filled/24/25D366/whatsapp.png"
							alt="WhatsApp"
						/>
					</a>
					<a
						href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
							`"${quote.content}" — ${quote.author}`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						title="Share on Twitter"
					>
						<img
              className="icon"
							src="https://img.icons8.com/ios-filled/24/1DA1F2/twitter.png"
							alt="Twitter"
						/>
					</a>
					<a
						href={`https://t.me/share/url?url=${encodeURIComponent(
							``
            )}
            &text=${encodeURIComponent(
				`"${quote.content}" — ${quote.author}`
			)}`}
						target="_blank"
						rel="noopener noreferrer"
						title="Share on Telegram"
					>
						<img
              className="icon"
							src="https://img.icons8.com/ios-filled/24/0088cc/telegram-app.png"
							alt="Telegram"
						/>
					</a>
				</div>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
    </>
  )
}


export default App;
