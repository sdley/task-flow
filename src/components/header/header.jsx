import './header.css'

function Header() {
  return (
    <div className="flex-container">
      <div>
        <img src="../src/assets/react.svg" alt="" />
      </div>
      <div>
        <h1>TaskFlow</h1>
        <p>Finie la procrastination, passez à l&apos;action en suivant le flux de vos tâches !</p>
      </div>
      <div>
        <img src="../src/assets/react.svg" alt="" />
      </div>
    </div>
  )
}

export default Header