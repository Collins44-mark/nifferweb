const PRODUCTS = [
  // Cosmetics
  { id: 1, name: 'SkinLuxy Showergel', price: 30000, category: 'cosmetics', rating: 5, reviews: 89, description: 'Luxurious body wash for smooth, radiant skin.', images: ['images/skinluxy-showergel.jpg'] },
  { id: 2, name: 'SkinLuxy Body Oil', price: 30000, category: 'cosmetics', rating: 5, reviews: 124, description: 'Nourishing body oil for silky, hydrated skin.', images: ['images/skinluxy-body-oil.jpg'] },
  { id: 3, name: 'Vaseline Cocoa Radiant Lotion', price: 25000, category: 'cosmetics', rating: 5, reviews: 256, description: 'Deep moisturizing lotion with cocoa butter for glowing skin.', images: ['images/vaseline-cocoaradiant-lotion.jpg'] },
  { id: 4, name: 'Medicube Red Peeling Pad', price: 85000, category: 'cosmetics', rating: 5, reviews: 178, description: 'Exfoliating peeling pads for smoother, brighter complexion.', images: ['images/medicube-red-peeling-pad.jpg'] },
  { id: 5, name: 'Medicube Pink Toning Gel Pad', price: 85000, category: 'cosmetics', rating: 5, reviews: 142, description: 'Soothing toning gel pads for balanced, refreshed skin.', images: ['images/medicube-pink-toning-gel-pad.jpg'] },
  { id: 6, name: 'Medicube Kojic Acid Turmeric Pad', price: 70000, category: 'cosmetics', rating: 5, reviews: 98, description: 'Brightening pads with kojic acid and turmeric for even skin tone.', images: ['images/medicube-kojic-acid-turmeric-pad.jpg'] },
  { id: 7, name: 'Medicube Deep Vita C Pad', price: 52000, category: 'cosmetics', rating: 5, reviews: 167, description: 'Vitamin C infused pads for radiant, revitalized skin.', images: ['images/medicube-deep-vita-c-pad.jpg'] },
  { id: 8, name: 'Vussen Cavitycare', price: 35000, category: 'cosmetics', rating: 5, reviews: 76, description: 'Premium oral care for healthy teeth and gums.', images: ['images/vussen-cavitycare.jpg'] },
  { id: 9, name: 'Mysore Sandal Soap', price: 35000, category: 'cosmetics', rating: 5, reviews: 312, description: 'Authentic sandalwood soap for gentle, fragrant cleansing.', images: ['images/mysore-sandal-soap.jpg'] },
  { id: 10, name: 'Amila Weepped Shea Butter', price: 100000, category: 'cosmetics', rating: 5, reviews: 89, description: 'Rich whipped shea butter for intense moisture.', images: ['images/amila-weepped-shea-butter.jpg'] },
  { id: 11, name: 'Amila Shea Body Oil', price: 115000, category: 'cosmetics', rating: 5, reviews: 134, description: 'Nourishing shea body oil for soft, supple skin.', images: ['images/amila-shea-body-oil.jpg'] },
  // Fashion
  { id: 12, name: 'Pashmina', price: 150000, category: 'fashion', rating: 5, reviews: 67, description: 'Luxurious pashmina shawl for elegant style.', images: ['images/pashmina.jpg'] },
  { id: 13, name: 'Abaya', price: 120000, category: 'fashion', rating: 5, reviews: 89, description: 'Elegant abaya for modest, sophisticated wear.', images: ['images/abaya.jpg'] },
  { id: 14, name: 'Birkins', price: 50000, category: 'fashion', rating: 5, reviews: 34, description: 'Iconic luxury handbag for timeless elegance.', images: ['images/birkins.jpg'] },
  // Fragrance
  { id: 15, name: '9am', price: 55000, category: 'fragrance', rating: 5, reviews: 112, description: 'Fresh and captivating fragrance for everyday elegance.', images: ['images/9am.jpg'] },
  { id: 16, name: 'YARA', price: 45000, category: 'fragrance', rating: 5, reviews: 156, description: 'Exotic and alluring scent for the modern woman.', images: ['images/yara.jpg'] },
  { id: 17, name: 'Eclaire', price: 50000, category: 'fragrance', rating: 5, reviews: 98, description: 'Luminous fragrance that lights up your presence.', images: ['images/eclaire.jpg'] },
  { id: 18, name: 'Mashmero', price: 70000, category: 'fragrance', rating: 5, reviews: 78, description: 'Bold and memorable fragrance for special moments.', images: ['images/mashmero.jpg'] },
  { id: 19, name: 'Khamrah', price: 110000, category: 'fragrance', rating: 5, reviews: 203, description: 'Warm, oriental scent with lasting impression.', images: ['images/khamrah.jpg'] },
  { id: 20, name: 'Armaf Yum Yum', price: 90000, category: 'fragrance', rating: 5, reviews: 189, description: 'Playful and sweet fragrance for everyday delight.', images: ['images/armaf-yum-yum.jpg'] }
];

const CATEGORIES = [
  { name: 'Cosmetics', slug: 'cosmetics', count: 11, description: 'Premium Beauty' },
  { name: 'Fashion', slug: 'fashion', count: 3, description: 'Curated Styles' },
  { name: 'Fragrance', slug: 'fragrance', count: 6, description: 'Luxury Scents' }
];

const TESTIMONIALS = [
  { name: 'Jessica Chen', rating: 5, text: 'Niffer Mall has everything I love in one place. The quality is incredible and shipping was so fast!', product: 'SkinLuxy Body Oil', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face' },
  { name: 'Marie Laurent', rating: 5, text: 'The Pashmina is perfection. Beautiful quality and the material is premium.', product: 'Pashmina', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  { name: 'Sophia Williams', rating: 5, text: 'Discovered so many new brands here. Everything from cosmetics to fragrance in one stunning platform!', product: 'Khamrah', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' },
  { name: 'Emma Rodriguez', rating: 5, text: 'Customer service was amazing. They helped me find the perfect fragrance for my collection.', product: 'YARA', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face' }
];
