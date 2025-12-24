let cardId = localStorage.getItem('selectedCard');

let title = document.getElementById('title');
let desc = document.getElementById('desc');
let image = document.getElementById('image');

if (cardId == 1) {
    title.innerText = "Elegant Winter Style";
    desc.innerText = "Experience the perfect blend of warmth and sophistication with this premium winter coat.\nDesigned for the modern woman, it features high-quality fabric that offers protection against the cold while maintaining a chic and polished silhouette.\nPerfect for formal outings or a stylish day at work.",
    image.src = "../images/product1_desc.jpg";
} 
else if (cardId == 2) {
    title.innerText = "Casual Cozy Comfort";
    desc.innerText = "Embrace ultimate comfort without sacrificing style with this casual blue ensemble.\nCrafted from soft, breathable materials, this outfit is your go-to choice for relaxed weekends, university days, or casual gatherings.\nThe deep blue color adds a touch of calm serenity to your winter wardrobe.",
    image.src = "../images/product2_desc.jpg";
} 
else if (cardId == 3) {
    title.innerText = "Graceful Pink Elegance";
    desc.innerText = "Radiate femininity and grace with this stunning pink dress.\nThe soft, flowing fabric drapes beautifully to create an ethereal look, making it an ideal choice for special occasions and afternoon events.\nThe delicate pastel hue complements your natural beauty and adds a cheerful vibe.",
    image.src = "../images/product3_desc.jpg";
}