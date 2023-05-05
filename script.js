const imgItem = document.querySelectorAll('.img');
console.log(imgItem);

for (const item of imgItem) {
    item.addEventListener('mouseover', () => {
        console.log('in');
        const previousItem = item.previousSibling.previousElementSibling;

        const nextItem = item.nextSibling.nextElementSibling;


        console.log('previousItem', previousItem);
        console.log('nextItem', nextItem);

        if (previousItem === null) {
            item.style.transform = "scale(2)"
            item.style.margin = "0px 40px"

            nextItem.style.transform = "scale(1.5)"
            nextItem.style.margin = "0px 20px"

            return;
        }

        else if (nextItem === null) {
            item.style.transform = "scale(2)"
            item.style.margin = "0px 40px"

            previousItem.style.transform = "scale(1.5)"
            previousItem.style.margin = "0px 20px"

            return;
        }

        else {
            item.style.transform = "scale(2)"
            item.style.margin = "0px 40px"

            previousItem.style.transform = "scale(1.5)"
            previousItem.style.margin = "0px 20px"

            nextItem.style.transform = "scale(1.5)"
            nextItem.style.margin = "0px 20px"
        }


    });

    item.addEventListener('mouseout', () => {
        console.log('out');
        const previousItem = item.previousSibling.previousElementSibling;
        const nextItem = item.nextSibling.nextElementSibling;

        console.log('previousItem', previousItem);


        if (previousItem === null) {
            item.style.transform = "scale(1)"
            item.style.margin = "0px 0"

            nextItem.style.transform = "scale(1)"
            nextItem.style.margin = "0px 0"
            return;
        }
        else if (nextItem === null) {
            item.style.transform = "scale(1)"
            item.style.margin = "0px 0"

            previousItem.style.transform = "scale(1)"
            previousItem.style.margin = "0px 0"
            return;
        }

        else {
            item.style.transform = "scale(1)"
            item.style.margin = "0px 0"

            previousItem.style.transform = "scale(1)"
            previousItem.style.margin = "0px 0"

            nextItem.style.transform = "scale(1)"
            nextItem.style.margin = "0px 0"
        }

    });
}
