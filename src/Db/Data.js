const makeupProducts = [
    {
      id: 1,
      name: "Lipstick",
      category: "Lip",
      price: 12.99,
      description: "A vibrant red lipstick with a long-lasting formula.",
      photo: "https://example.com/images/lipstick.jpg"
    },
    {
      id: 2,
      name: "Foundation",
      category: "Face",
      price: 25.99,
      description: "A lightweight foundation with full coverage.",
      photo: "https://example.com/images/foundation.jpg"
    },
    {
      id: 3,
      name: "Eyeshadow Palette",
      category: "Eyes",
      price: 19.99,
      description: "A palette with a variety of colors for any occasion.",
      photo: "https://example.com/images/eyeshadow.jpg"
    },
    {
      id: 4,
      name: "Mascara",
      category: "Eyes",
      price: 14.99,
      description: "A volumizing and lengthening mascara.",
      photo: "https://example.com/images/mascara.jpg"
    },
    {
      id: 5,
      name: "Blush",
      category: "Face",
      price: 9.99,
      description: "A soft pink blush for a natural flush.",
      photo: "https://example.com/images/blush.jpg"
    },
    {
      id: 6,
      name: "Lip Gloss",
      category: "Lip",
      price: 7.99,
      description: "A high-shine lip gloss with a hint of color.",
      photo: "https://example.com/images/lipgloss.jpg"
    },
    {
      id: 7,
      name: "Concealer",
      category: "Face",
      price: 10.99,
      description: "A full-coverage concealer to hide imperfections.",
      photo: "https://example.com/images/concealer.jpg"
    },
    {
      id: 8,
      name: "Highlighter",
      category: "Face",
      price: 12.99,
      description: "A shimmering highlighter for a radiant glow.",
      photo: "https://example.com/images/highlighter.jpg"
    },
    {
      id: 9,
      name: "Bronzer",
      category: "Face",
      price: 11.99,
      description: "A matte bronzer for a sun-kissed look.",
      photo: "https://example.com/images/bronzer.jpg"
    },
    {
      id: 10,
      name: "Setting Spray",
      category: "Face",
      price: 15.99,
      description: "A long-lasting setting spray to keep makeup in place.",
      photo: "https://example.com/images/settingspray.jpg"
    },
    {
      id: 11,
      name: "Lip Balm",
      category: "Lip",
      price: 4.99,
      description: "A moisturizing lip balm with a hint of tint.",
      photo: "https://example.com/images/lipbalm.jpg"
    },
    {
      id: 12,
      name: "Eyebrow Pencil",
      category: "Eyes",
      price: 8.99,
      description: "A precise eyebrow pencil for defining brows.",
      photo: "https://example.com/images/eyebrowpencil.jpg"
    },
    {
      id: 13,
      name: "Eyeliner",
      category: "Eyes",
      price: 9.99,
      description: "A waterproof eyeliner for a bold look.",
      photo: "https://example.com/images/eyeliner.jpg"
    },
    {
      id: 14,
      name: "Primer",
      category: "Face",
      price: 13.99,
      description: "A smoothing primer to prep the skin for makeup.",
      photo: "https://example.com/images/primer.jpg"
    },
    {
      id: 15,
      name: "Contour Kit",
      category: "Face",
      price: 18.99,
      description: "A contour kit with shades to sculpt the face.",
      photo: "https://example.com/images/contourkit.jpg"
    },
    {
      id: 16,
      name: "Lip Liner",
      category: "Lip",
      price: 6.99,
      description: "A creamy lip liner to define lips.",
      photo: "https://example.com/images/lipliner.jpg"
    },
    {
      id: 17,
      name: "BB Cream",
      category: "Face",
      price: 20.99,
      description: "A lightweight BB cream with SPF protection.",
      photo: "https://example.com/images/bbcream.jpg"
    },
    {
      id: 18,
      name: "Loose Powder",
      category: "Face",
      price: 14.99,
      description: "A translucent loose powder to set makeup.",
      photo: "https://example.com/images/loosepowder.jpg"
    },
    {
      id: 19,
      name: "Setting Powder",
      category: "Face",
      price: 16.99,
      description: "A pressed setting powder for a matte finish.",
      photo: "https://example.com/images/settingpowder.jpg"
    },
    {
      id: 20,
      name: "Eyelash Curler",
      category: "Eyes",
      price: 8.99,
      description: "An eyelash curler for perfectly curled lashes.",
      photo: "https://example.com/images/eyelashcurler.jpg"
    },
    {
      id: 21,
      name: "Lip Stain",
      category: "Lip",
      price: 9.99,
      description: "A long-lasting lip stain with a matte finish.",
      photo: "https://example.com/images/lipstain.jpg"
    },
    {
      id: 22,
      name: "Cream Blush",
      category: "Face",
      price: 12.99,
      description: "A cream blush for a dewy finish.",
      photo: "https://example.com/images/creamblush.jpg"
    },
    {
      id: 23,
      name: "Face Serum",
      category: "Face",
      price: 24.99,
      description: "A hydrating face serum for glowing skin.",
      photo: "https://example.com/images/faceserum.jpg"
    },
    {
      id: 24,
      name: "Eye Cream",
      category: "Eyes",
      price: 18.99,
      description: "A nourishing eye cream to reduce puffiness.",
      photo: "https://example.com/images/eyecream.jpg"
    },
    {
      id: 25,
      name: "Facial Mist",
      category: "Face",
      price: 13.99,
      description: "A refreshing facial mist to hydrate skin.",
      photo: "https://example.com/images/facialmist.jpg"
    },
    {
      id: 26,
      name: "Lip Scrub",
      category: "Lip",
      price: 7.99,
      description: "An exfoliating lip scrub for smooth lips.",
      photo: "https://example.com/images/lipscrub.jpg"
    },
    {
      id: 27,
      name: "Face Mask",
      category: "Face",
      price: 15.99,
      description: "A detoxifying face mask for clear skin.",
      photo: "https://example.com/images/facemask.jpg"
    },
    {
      id: 28,
      name: "Toner",
      category: "Face",
      price: 11.99,
      description: "A balancing toner for even skin tone.",
      photo: "https://example.com/images/toner.jpg"
    },
    {
      id: 29,
      name: "Cleanser",
      category: "Face",
      price: 14.99,
      description: "A gentle cleanser for daily use.",
      photo: "https://example.com/images/cleanser.jpg"
    },
    {
      id: 30,
      name: "Moisturizer",
      category: "Face",
      price: 19.99,
      description: "A hydrating moisturizer for all skin types.",
      photo: "https://example.com/images/moisturizer.jpg"
    },
    {
      id: 31,
      name: "Sheet Mask",
      category: "Face",
      price: 5.99,
      description: "A hydrating sheet mask for instant glow.",
      photo: "https://example.com/images/sheetmask.jpg"
    },
    {
      id: 32,
      name: "Makeup Remover",
      category: "Face",
      price: 9.99,
      description: "A gentle makeup remover for sensitive skin.",
      photo: "https://example.com/images/makeupremover.jpg"
    },
    {
      id: 33,
      name: "Lip Plumper",
      category: "Lip",
      price: 13.99,
      description: "A lip plumper for fuller-looking lips.",
      photo: "https://example.com/images/lipplumper.jpg"
    },
    {
      id: 34,
      name: "Face Oil",
      category: "Face",
      price: 22.99,
      description: "A nourishing face oil for dry skin.",
      photo: "https://example.com/images/faceoil.jpg"
    },
]
export default makeupProducts;