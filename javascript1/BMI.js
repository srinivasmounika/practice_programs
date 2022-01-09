// window.onload = () => {
// 	let button = document.querySelector("#btn");

// 	// Function for calculating BMI
// 	button.addEventListener("click", calculateBMI);
// };

// function calculateBMI() {

// 	/* Getting input from user into height variable.
// 	Input is string so typecasting is necessary. */
// 	let height = parseInt(document
// 			.querySelector("#height").value);

// 	/* Getting input from user into weight variable.
// 	Input is string so typecasting is necessary.*/
// 	let width = parseInt(document
// 			.querySelector("#width").value);

// 	let result = document.querySelector("#result");

// 	// Checking the user providing a proper
// 	// value or not
// 	if (height === "" || isNaN(height))
// 		result.innerHTML = "Provide a valid Height!";

// 	else if (width === "" || isNaN(width))
// 		result.innerHTML = "Provide a valid Width!";

// 	// If both input is valid, calculate the bmi
// 	else {

// 		// Fixing upto 2 decimal places
// 		let bmi = (width / ((height * height)
// 							/ 10000)).toFixed(2);

// 		// Dividing as per the bmi conditions
// 		if (bmi < 18.6) result.innerHTML =
// 			` Width : <span>${bmi}</span>`;

// 		else if (bmi >= 18.6 && bmi < 24.9)
// 			result.innerHTML =
// 				`Normal : <span>${bmi}</span>`;

// 		else result.innerHTML =
// 			` Width : <span>${bmi}</span>`;
// 	}
// }

window.onload=()=>{
    let button =document.querySelector("#btn");
    button.addEventListener("click",calculateBMI);
};
function calculateBMI(){
    let height=parseInt(document.querySelector("#height").value);
    let width=parseInt(document.querySelector("#width").value);
    let result=parseInt(document.querySelector("#result"));

    if(height ===""||isNaN(height))
        result.innerHTML="provide a valid height";
    else if(width===""||isNaN(width))
    result.innerHTML="provide a valid width";

    else{
        let bmi=(width/((height*height)/10000)).toFixed(2);

        if(bmi<18.6) result.innerHTML=`width:<span>${bmi}</span>`;

        else if(bmi>=18.6&&bmi<24.8)
        result.innerHTML=`Normal:<span>${bmi}</span>`;

        else result.innerHTML=`width:<span>${bmi}</span>`;

    }
}
