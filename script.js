
let clickCount = 1;
        document.getElementById("minus").addEventListener("click", () => {
           if (clickCount > 1) {
                clickCount--
                document.getElementById("message").innerText = `${clickCount}`
           }        
        });
    
        document.getElementById("plus").addEventListener("click", () => {
            clickCount++
            document.getElementById("message").innerText = `${clickCount}`
        });

        document.getElementById("toWhite").addEventListener