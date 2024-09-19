import "./suspect.css"

export default function Suspect(){
    return(
        <>
         {/* <ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> */}

        <div className="qq">
            <div className="q1">
                <span>Suspected Trans. ID's</span>
                  <ul class="list-group lm">
                  <li class="list-group-item gh">0x12...abcdef12345678<a href="#">see details</a></li>
  <li class="list-group-item gh">0xab...567890abcdef12<a href="#">see details</a></li>
  <li class="list-group-item gh">0x78...1234567890abcd<a href="#">see details</a></li>
  <li class="list-group-item gh">0x45...def1234567890ab<a href="#">see details</a></li>
  <li class="list-group-item gh">0xef...90abcdef123456<a href="#">see details</a></li>
  <li class="list-group-item gh">0x90...34567890abcdef<a href="#">see details</a></li>
  <li class="list-group-item gh">0x56...ef1234567890ab<a href="#">see details</a></li>
  <li class="list-group-item gh">0xab...567890abcdef12<a href="#">see details</a></li>
  <li class="list-group-item gh">0x78...1234567890abcd<a href="#">see details</a></li>
</ul>
<div class="btn-group nnm hj" role="group" aria-label="Basic radio toggle button group">
  {/* <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked /> */}
  <label class="btn btn-outline-primary" for="btnradio1">back</label>

  

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
  <label class="btn btn-outline-primary" for="btnradio3">next</label>
</div>
            </div>
            <div className="q1">
            <span> Suspected wallets</span>
<ul class="list-group lm">
  <li class="list-group-item gh">0x12...abcdef12345678<a href="#">see details</a></li>
  <li class="list-group-item gh">0xab...567890abcdef12<a href="#">see details</a></li>
  <li class="list-group-item gh">0x78...1234567890abcd<a href="#">see details</a></li>
  <li class="list-group-item gh">0x45...def1234567890ab<a href="#">see details</a></li>
  <li class="list-group-item gh">0xef...90abcdef123456<a href="#">see details</a></li>
  <li class="list-group-item gh">0x90...34567890abcdef<a href="#">see details</a></li>
  <li class="list-group-item gh">0x56...ef1234567890ab<a href="#">see details</a></li>
  <li class="list-group-item gh">0xab...567890abcdef12<a href="#">see details</a></li>
  <li class="list-group-item gh">0x78...1234567890abcd<a href="#">see details</a></li>
</ul>

<div class="btn-group nnm hj" role="group" aria-label="Basic radio toggle button group">
  {/* <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked /> */}
  <label class="btn btn-outline-primary" for="btnradio1">back</label>

  

  <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
  <label class="btn btn-outline-primary" for="btnradio3">next</label>
</div>

            </div>
    

        </div>
        <div className="mv">

        <div className="vv">
        <button type="button" class="btn btn-outline-primary" disabled>add suspected tran's id</button>
        <button type="button" class="btn btn-outline-primary" disabled>add suspected tran's id</button>
        </div>

        <div class="input-group mb-3 lms">
  <input type="text" class="form-control" placeholder="search here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">Search</span>
</div>

        <div className="vv">
        <button type="button" class="btn btn-outline-primary" disabled>add suspected wallets</button>
        <button type="button" class="btn btn-outline-primary" disabled>add suspected wallets</button>
        </div>
        

        </div>
        
        
        </>
    )
}