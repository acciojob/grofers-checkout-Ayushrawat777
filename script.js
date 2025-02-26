const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const getAllPrices=document.querySelectorAll(".price");
let sum=0;
const table=document.querySelector("table");
const getSum = () => {
//Add your code here
	getAllPrices.forEach(ele=>sum+=parseInt(ele.innerText));
    table.innerHTML+=`<tr id="ans">
	<td>Total</td>
	 <td>${sum}</td>
	</tr>`
};

getSumBtn.addEventListener("click", getSum);