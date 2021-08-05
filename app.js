// console.log("I am rady");

////////////////////////////////////////////////////////////////
// =============== USE NON-ARRAY METHOD ==================

// let Child_image = document.querySelectorAll(".Child_image");
// let Container = document.querySelector(".Container");

// let Right_site = document.querySelector(".Right_site");
// let Left_site = document.querySelector(".Left_site");

// let index_of
// let Round_of = 1;

// // Mobile_carasol()

// Left_site.addEventListener("click", Mobile_carasol_left)
// Right_site.addEventListener("click", Mobile_carasol_right)

// function Mobile_carasol_left() {

//     if (Round_of >= 6) { Round_of = 1 }

//     if (Round_of <= 5) {
//         index_of = 0 + Round_of
//         if (index_of > 4) { index_of = index_of - 5 }
//         console.log("index for 0 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 1; --translateX: 110%; --scale: .8;";

//         index_of = 1 + Round_of
//         if (index_of > 4) { index_of = index_of - 5 }
//         console.log("index for 1 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 2;--translateX: 60%;--scale: .9;";

//         index_of = 2 + Round_of
//         if (index_of > 4) { index_of = index_of - 5 }
//         console.log("index for 2 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 5;--translateX: 0;--scale: 1;";

//         index_of = 3 + Round_of
//         if (index_of > 4) { index_of = index_of - 5 }
//         console.log("index for 3 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 2;--translateX: -60%;--scale: .9;";

//         index_of = 4 + Round_of
//         if (index_of > 4) { index_of = index_of - 5 }
//         console.log("index for 4 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 1;--translateX: -110%;--scale: .8;";
//         // console.log(Round_of)
//         Round_of++;
//         console.log("I am if")
//         console.log(Round_of)
//     }


// }


// function Mobile_carasol_right() {


//     if (Round_of >= 6) { Round_of = 1 }

//     if (Round_of <= 5) {

//         index_of = 0 - Round_of
//         if (index_of < 0) { index_of = index_of + 5 }
//         console.log("index for 0 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 1; --translateX: 110%; --scale: .8;";

//         index_of = 1 - Round_of
//         if (index_of < 0) { index_of = index_of + 5 }
//         console.log("index for 1 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 2;--translateX: 60%;--scale: .9;";

//         index_of = 2 - Round_of
//         if (index_of < 0) { index_of = index_of + 5 }
//         console.log("index for 2 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 5;--translateX: 0;--scale: 1;";

//         index_of = 3 - Round_of
//         if (index_of < 0) { index_of = index_of + 5 }
//         console.log("index for 3 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 2;--translateX: -60%;--scale: .9;";

//         index_of = 4 - Round_of
//         if (index_of < 0) { index_of = index_of + 5 }
//         console.log("index for 4 : " + index_of)
//         Child_image[index_of].style.cssText = "--z-index: 1;--translateX: -110%;--scale: .8;";

//         Round_of++;
//         console.log("I am if")
//         console.log(Round_of)

//     }

// }

// ===========================================================================

// ================ USE ARRY METHOD ==================


let Right_site = document.querySelector(".Right_site");
let Left_site = document.querySelector(".Left_site");


let Child_image = document.querySelectorAll(".Child_image");
Child_image = Array.from(Child_image); // MAKE ARRAY//

Left_site.addEventListener("click", Mobile_carasol_left)
Right_site.addEventListener("click", Mobile_carasol_right)

setInterval(Mobile_carasol_right, 5000)

function Mobile_carasol_left() {

    Child_image = (Increase_arr(Child_image));

    Child_image[0].style.cssText = "--z-index: 1; --translateX: 110%; --scale: .8;";
    Child_image[1].style.cssText = "--z-index: 2;--translateX: 60%;--scale: .9;";
    Child_image[2].style.cssText = "--z-index: 5;--translateX: 0;--scale: 1;";
    Child_image[3].style.cssText = "--z-index: 2;--translateX: -60%;--scale: .9;";
    Child_image[4].style.cssText = "--z-index: 1;--translateX: -110%;--scale: .8;";

    // console.log(Child_image)

};

function Mobile_carasol_right() {


    Child_image = (Decrease_arr(Child_image));

    Child_image[0].style.cssText = "--z-index: 1; --translateX: 110%; --scale: .8;";
    Child_image[1].style.cssText = "--z-index: 2;--translateX: 60%;--scale: .9;";
    Child_image[2].style.cssText = "--z-index: 5;--translateX: 0;--scale: 1;";
    Child_image[3].style.cssText = "--z-index: 2;--translateX: -60%;--scale: .9;";
    Child_image[4].style.cssText = "--z-index: 1;--translateX: -110%;--scale: .8;";

    // console.log(Child_image)
};

// =====================================================

/////////////////////////////////////////////////////////////////////////////////////////////
// ============ MAKE UNIVERSAL INCREASE AND DECREASE ARR METHOD ===============

function Decrease_arr(Arr) {
    Arr.splice(0, 0, Arr[Arr.length - 1])
    Arr.pop();
    return Arr;
}


function Increase_arr(Arr) {
    Arr.push(Arr[0]);
    Arr.splice(0, 2, Arr[1])
    return Arr;
}
/////////////////////////////////////////////////////////////////////////////////////////////////
