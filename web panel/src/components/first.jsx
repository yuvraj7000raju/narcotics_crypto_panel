import "./first.css"
export default function First(){
    return(
        <>
        <div className="ll">
            <span>Search wallet details here</span>
            <div class="input-group mb-3 lls">
  <input type="text" class="form-control" placeholder="enter wallet address" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">Search</span>
</div>
      
<span>Latest Transactions of Suspected Wallets</span>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Time</th>
      <th scope="col">Sender</th>
      <th scope="col">Trans. ID</th>
      <th scope="col">Receiver</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1 sec ago</th>
      <td>0xA12F...89BC</td>
      <td>9d2f43f8bd3e4c...</td>
      <td>0xC48D...21FE</td>
    </tr>
    <tr>
      <th scope="row">45 sec ago</th>
      <td>0xB34D...54DF</td>
      <td>7a1e4b6cb9387e...</td>
      <td>0xE89F...12CD</td>
    </tr>
    <tr>
      <th scope="row">2 min ago</th>
      <td>0xD91A...65EF</td>
      <td>1c4d3a5a2f7c9d...</td>
      <td>0xA23B...43FA</td>
    </tr>
    <tr>
      <th scope="row">5 min ago</th>
      <td>0xE23F...12BC</td>
      <td>4f7e8a5c23a6be...</td>
      <td>0xC94D...78AB</td>
    </tr>
    <tr>
      <th scope="row">10 min ago</th>
      <td>0xA74C...37EF</td>
      <td>6b5d9e4c19b8af...</td>
      <td>0xD81E...52AC</td>
    </tr>
    <tr>
      <th scope="row">15 min ago</th>
      <td>0xB19F...24CD</td>
      <td>3d7e9a5d2c8b7e...</td>
      <td>0xF42D...89BA</td>
    </tr>
    <tr>
      <th scope="row">20 min ago</th>
      <td>0xE89D...54AF</td>
      <td>8c3f6b4a12d7ce...</td>
      <td>0xA91C...23BD</td>
    </tr>
    <tr>
      <th scope="row">25 min ago</th>
      <td>0xC38A...14BC</td>
      <td>5e7b4f2a9c1d8e...</td>
      <td>0xE76F...36AC</td>
    </tr>
    <tr>
      <th scope="row">30 min ago</th>
      <td>0xD42B...32DF</td>
      <td>2f4d8c3a6b7e9d...</td>
      <td>0xB12C...58FE</td>
    </tr>
    <tr>
      <th scope="row">35 min ago</th>
      <td>0xF13E...25AD</td>
      <td>7b6d9a3e4c1f8b...</td>
      <td>0xD58F...41AC</td>
    </tr>
    <tr>
      <th scope="row">40 min ago</th>
      <td>0xA24C...13EF</td>
      <td>4a1e8b6f3c7d2f...</td>
      <td>0xC48D...56BC</td>
    </tr>
  </tbody>
</table>



<div class="btn-group nnm " role="group" aria-label="Basic radio toggle button group">
  {/* <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked /> */}
  <label class="btn btn-outline-primary" for="btnradio1">back</label>

  

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
  <label class="btn btn-outline-primary" for="btnradio3">next</label>
</div>











        </div>
        </>
    )
}