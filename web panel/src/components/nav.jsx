// import "./nav.css";

// export default function Navv(){
//     return(
//         <>
//         <div className="n1">
//         <ul class="nav nav-pills nav-fill nnm">
//         <li class="nav-item">
//     <img className="nav-img" src="https://narcoticsindia.nic.in/assets/images/logo/05.png" alt="" />
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" aria-current="page" href="#">Home</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="#">Reports</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="#">Suspects</a>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" aria-disabled="true">Setting</a>
//   </li>
// </ul>
// </div>
//         </>
//     )
// }

import "./nav.css";

export default function Navv({ setCurrentPage }) {
  return (
    <div className="n1">
      <ul className="nav nav-pills nav-fill nnm">
        <li className="nav-item">
          <img
            className="nav-img"
            src="https://narcoticsindia.nic.in/assets/images/logo/05.png"
            alt=""
          />
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('First')}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('transaction')}>
          transaction Hash
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('reports')}>
            Reports
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('suspects')}>
            Suspects
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setCurrentPage('settings')}>
            Settings
          </button>
        </li>
       
      </ul>
    </div>
  );
}
