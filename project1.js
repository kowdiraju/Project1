const pricingCard = document.querySelectorAll(".pricing-card")
const pricingButtons = document.querySelectorAll(".pricing-button");
const cartCount = document.getElementById("cartCount");
cartCount.style.fontSize = '15px';
let x = 0;
const orderedPlan = [];

pricingButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        x = x + 1;
        cartCount.innerHTML = x;

        const pricingCard = button.closest('.pricing-card');
        const productName = pricingCard.querySelector('h3').textContent;
        const productPrice = pricingCard.querySelector('p').textContent;
        cartCount.style.color = 'red';
        orderedPlan.push({ name: productName, price: productPrice }); // Pushing product name into the array

        localStorage.setItem('planData', JSON.stringify(orderedPlan));
    });
});

const pillsTabs = document.querySelectorAll('.nav-link');
const tabContent = document.getElementById('pills-tabContent');

pillsTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-bs-target').slice(1);
        const targetContent = document.getElementById(targetId);

        // Remove active class from all tab contents
        tabContent.querySelectorAll('.tab-pane').forEach(content => {
            content.classList.remove('show', 'active');
        });

        targetContent.classList.add('show', 'active');
    });
});


const serviceButton = document.querySelectorAll('.service-button');
const serviceCardContent = document.querySelectorAll('.service-card-content');
serviceButton.forEach(e => {
    e.addEventListener('mouseenter', () => {

        e.classList.remove('text-white');
        e.classList.add('text-black');

        serviceCardContent.forEach(etext => {
            etext.style.paddingTop = '10px';
            etext.style.paddingBottom = '10px';
        })
    })
})

serviceButton.forEach(e => {
    e.addEventListener('mouseleave', () => {
        e.classList.remove('text-black');
        e.classList.add('text-white');

        serviceCardContent.forEach(etext => {
            etext.style.paddingTop = '10px';
            etext.style.paddingBottom = '10px';
        })
    });

});