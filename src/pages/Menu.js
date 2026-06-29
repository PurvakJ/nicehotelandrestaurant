// pages/Menu.js
import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Comprehensive food images mapping - each item gets its own specific image
  const getFoodImage = (itemName) => {
    const name = itemName.toLowerCase().trim();
    
    // ----- BEVERAGES -----
    if (name === 'lassi sweet/salt' || name.includes('lassi')) 
      return  '/images/lassi.webp';
    if (name === 'mineral water') 
      return '/images/mineralwater.jpg';
    if (name === 'fresh lime soda') 
      return '/images/limesoda.webp';
    if (name === 'fresh lime water') 
      return  '/images/limesoda.webp';
    if (name === 'soda (600ml)') 
      return  '/images/limesoda.webp';
    if (name === 'lime cordial juice (30ml)') 
      return ' /images/limesoda.webp';
    if (name === 'soft drink (300ml)') 
      return  '/images/soft.webp';
    if (name === 'soft drink (500ml)') 
      return '/images/soft.webp';
    if (name === 'soft drink (1ltr)') 
      return '/images/soft.webp';
    if (name === 'ice cube basket') 
      return '/images/ice.webp';
    if (name === 'milk') 
      return '/images/milk.webp';
    if (name === 'hot coffee') 
      return '/images/coffee.webp';
    if (name === 'cold coffee') 
      return '/images/coffee.webp';
    if (name === 'cold coffee with ice cream') 
      return '/images/coffee.webp';
    if (name === 'black tea') 
      return 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=200&h=200&fit=crop';
    if (name === 'elaichi flavour tea') 
      return 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=200&h=200&fit=crop';
    
    // ----- JUICE -----
    if (name === 'pineapple') 
      return '/images/pineapple.webp';
    if (name === 'orange') 
      return '/images/orange.webp';
    if (name === 'guava') 
      return '/images/gauva.webp';
    if (name === 'mango') 
      return '/images/mango.webp';
    if (name === 'apple') 
      return '/images/apple.webp';
    if (name === 'mix juice') 
      return '/images/mix.webp';
    
    // ----- SHAKES -----
    if (name === 'vanilla') 
      return 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop';
    if (name === 'butter scotch') 
      return 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=200&h=200&fit=crop';
    if (name === 'chocolate') 
      return 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop';
    if (name === 'tutti fruit shake') 
      return 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=200&h=200&fit=crop';
    if (name === 'kaju kishmish shake') 
      return 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=200&h=200&fit=crop';
    if (name === 'milk shake') 
      return 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=200&h=200&fit=crop';
    
    // ----- BREAKFAST -----
    if (name === 'veg sandwich (cold)') 
      return 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=200&fit=crop';
    if (name === 'veg sandwich (grilled)') 
      return 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=200&fit=crop';
    if (name === 'non-veg sandwich (grilled)') 
      return 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=200&fit=crop';
    if (name === 'butter toast') 
      return 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=200&h=200&fit=crop';
    if (name === 'toast with egg') 
      return 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=200&h=200&fit=crop';
    if (name === 'jam toast') 
      return 'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=200&h=200&fit=crop';
    if (name === 'omelette with slice (2 pcs.)') 
      return 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=200&h=200&fit=crop';
    if (name === 'bread slice (2pcs)') 
      return 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop';
    
    // ----- SOUPS -----
    if (name === 'tomato soup') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name === 'veg soup') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name.includes('clear soup')) 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name.includes('hot sour soup')) 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name.includes('wonton soup')) 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name === 'sweet corn soup (veg/chicken)') 
      return 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=200&h=200&fit=crop';
    if (name.includes('manchow soup')) 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name.includes('talumein soup')) 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name.includes('lemon corriender')) 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name === 'chicken soup') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    
    // ----- VEG STARTERS - Each with specific image -----
    if (name === 'paneer papdi kabab') 
      return '/images/paneerpapdi.webp';
    if (name === 'cheese ball') 
      return '/images/cheeseball.webp';
    if (name === 'paneer candy') 
      return '/images/paneer candy.webp';
    if (name === 'veg ball') 
      return '/images/vegball.webp';
    if (name === 'cheese corn ball') 
      return '/images/cheesecornroll.webp';
    if (name === 'crispy corn') 
      return '/images/crispycorn.webp';
    if (name === 'dry papad/fry papad') 
      return '/images/drypapad.webp';
    if (name === 'masala papad') 
      return '/images/masalapapad.webp';
    if (name === 'veg bar salad') 
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop';
    if (name === 'mushroom double decker') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'mushroom duplex') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'chana chaat') 
      return '/images/chanachat.webp';
    if (name === 'plain peanut') 
      return '/images/plainpeanut.webp';
    if (name === 'peanut massala') 
      return '/images/peanutmasala.webp';
    if (name === 'mix chaat') 
      return '/images/mixchat.webp';
    if (name === 'veg pakora') 
      return '/images/vegpakora.webp';
    if (name === 'paneer pakora') 
      return '/images/paneerpakora.webp';
    if (name === 'hara bhara cocktail kabab') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'veg cutlet') 
      return '/images/vegkatlet.webp';
    if (name === 'cheese finger') 
      return '/images/cheesefinger.webp';
    if (name === 'plain paneer with collandu') 
      return '/images/cheesecorn.webp';
    if (name === 'cheese corn roll') 
      return '/images/cheesecornroll.webp';
    if (name === 'palak cheese corn roll') 
      return '/images/cheesecornroll.webp';
    
    // ----- TANDOORI VEG -----
    if (name === 'paneer tikka') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'vegetable seekh kabab') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'mushroom tikka') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'paneer haryali tikka') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'paneer malai tikka') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'lemon paneer tikka') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'tandoori veg platter') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'mushroom achari tikka') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'mushroom ajwain tikka') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'tandoori gobhi') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'bharwa aloo') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    
    // ----- CHINESE VEG -----
    if (name === 'mushroom garlic') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'thai ball') 
      return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop';
    if (name === 'veg manchurian (dry/gravy)') 
      return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop';
    if (name === 'cheese manchurian') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'mix veg spring roll') 
      return 'https://images.unsplash.com/photo-1625938144747-48c5f5411e80?w=200&h=200&fit=crop';
    if (name === 'cheese spring roll') 
      return 'https://images.unsplash.com/photo-1625938144747-48c5f5411e80?w=200&h=200&fit=crop';
    if (name === 'chilli potato') 
      return 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=200&h=200&fit=crop';
    if (name === 'crispy veg chilly') 
      return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop';
    if (name === 'cheese chilly (dry/gravy)') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'mushroom chilly') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'veg bullet') 
      return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop';
    if (name === 'veg cocktail kabab') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'honey chilly potato') 
      return 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=200&h=200&fit=crop';
    if (name === 'honey chilly cauliflower') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'french fry (indian style)') 
      return 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=200&h=200&fit=crop';
    if (name === 'french fry (american style)') 
      return 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=200&h=200&fit=crop';
    if (name === 'veg noodle') 
      return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop';
    if (name === 'cheese noodle') 
      return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop';
    if (name === 'singhapuri chowmin') 
      return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop';
    if (name === 'garlic noodles veg') 
      return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop';
    if (name === 'veg hakka noodles') 
      return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop';
    if (name === 'veg fried rice') 
      return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop';
    if (name === 'cheese fried rice') 
      return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop';
    if (name === 'chicken hakka noodles') 
      return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop';
    
    // ----- NON-VEG STARTERS -----
    if (name === 'crispy honey chicken (half)') 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name === 'crispy honey chicken (full)') 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken lollipop')) 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    if (name === 'egg chilly') 
      return 'https://images.unsplash.com/photo-1587486913049-53fc8894cfc4?w=200&h=200&fit=crop';
    if (name.includes('chilly chicken (dry/gravy')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chilly chicken boneless')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name === 'chicken fried rice') 
      return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop';
    if (name === 'egg fried rice') 
      return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop';
    if (name === 'chicken spring roll') 
      return 'https://images.unsplash.com/photo-1625938144747-48c5f5411e80?w=200&h=200&fit=crop';
    if (name.includes('chicken manchurian')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name === 'egg chowmin') 
      return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop';
    if (name === 'chicken chowmin') 
      return 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=200&h=200&fit=crop';
    if (name.includes('chicken 65')) 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    if (name.includes('chicken pakora')) 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    if (name.includes('chicken pakora kfc')) 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    
    // ----- TANDOORI NON-VEG -----
    if (name.includes('afghani chicken')) 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    if (name.includes('tandoori chicken')) 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    if (name.includes('kalami kabab')) 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'chicken cheese kabab') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'chicken achari tikka') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'murg kali mirch tikka') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'stuffed afgani chicken full') 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    if (name.includes('pudina chicken')) 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    if (name.includes('stuff tangri peminan')) 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    if (name.includes('white tandoori chicken')) 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    if (name === 'chicken seekh kabab') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'chicken malai tikka') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'chicken tikka') 
      return 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=200&h=200&fit=crop';
    if (name === 'non-veg platter (bar salad)') 
      return 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop';
    
    // ----- SALAD -----
    if (name === 'green salad') 
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop';
    if (name === 'onion salad') 
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop';
    if (name === 'kachumber salad') 
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop';
    if (name === 'cream kachumber salad') 
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop';
    
    // ----- RAITA -----
    if (name === 'mix veg raita') 
      return 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop';
    if (name === 'aloo raita') 
      return 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop';
    if (name === 'pineapple raita') 
      return 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop';
    if (name === 'bundi raita') 
      return 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop';
    if (name === 'mint raita') 
      return 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop';
    if (name === 'plain curd raita') 
      return 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop';
    
    // ----- RICE & BIRYANI -----
    if (name === 'plain rice') 
      return 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=200&h=200&fit=crop';
    if (name === 'jeera rice') 
      return 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=200&h=200&fit=crop';
    if (name === 'veg pulao') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'mutter pulao') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'veg biryani') 
      return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop';
    if (name === 'chicken biryani') 
      return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop';
    if (name === 'chicken hyderabadi biryani') 
      return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop';
    if (name === 'egg pulao') 
      return 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop';
    if (name === 'egg biryani with gravy') 
      return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop';
    
    // ----- BREADS - Each specific -----
    if (name === 'plain prantha') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'lachha prantha') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'stuff prantha (gobhi/aloo/mix veg.)') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'plain roti') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'onion roti') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'onion roti with butter') 
      return 'https://images.unsplash.com/photo-1589985270822-4b7f671561f9?w=200&h=200&fit=crop';
    if (name === 'butter roti') 
      return 'https://images.unsplash.com/photo-1589985270822-4b7f671561f9?w=200&h=200&fit=crop';
    if (name === 'missi roti') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'onion missi roti') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'missi roti with butter') 
      return 'https://images.unsplash.com/photo-1589985270822-4b7f671561f9?w=200&h=200&fit=crop';
    if (name === 'plain naan') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'butter naan') 
      return 'https://images.unsplash.com/photo-1589985270822-4b7f671561f9?w=200&h=200&fit=crop';
    if (name === 'cheese naan') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'stuff naan (mix veg.)') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'amritsari naan') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'stuff kulcha (aloo/onion/veg.)') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'tawa roti') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'garlic naan') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'cheese/stuff naan with gravy') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'chicken keema/parantha/naan') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    if (name === 'egg prantha/naan') 
      return 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop';
    
    // Amul Butter items
    if (name === 'quarter') 
      return 'https://images.unsplash.com/photo-1589985270822-4b7f671561f9?w=200&h=200&fit=crop';
    if (name === 'half') 
      return 'https://images.unsplash.com/photo-1589985270822-4b7f671561f9?w=200&h=200&fit=crop';
    if (name === 'full') 
      return 'https://images.unsplash.com/photo-1589985270822-4b7f671561f9?w=200&h=200&fit=crop';
    
    // ----- VEG MAIN COURSE - Each specific -----
    if (name === 'dal makhani') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name === 'dal balti') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name === 'dal fry') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name === 'yellow dal') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name === 'mix vegetable') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'kaju curry') 
      return 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&h=200&fit=crop';
    if (name === 'dam aloo') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'dam aloo kashmiri') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'malai kofta') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'mushroom masala') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'chana masala') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'mushroom do payaza') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'mushroom kadahi') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'mutter mushroom') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'shahi paneer') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'paneer tikka butter masala') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'paneer butter masala') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'palak paneer') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'mutter paneer') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'karahi paneer') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'paneer pasanda') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'cheese tomato') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'paneer do payaza') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'paneer bhurji') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'palak kofta') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'mutter masala') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'aloo mutter') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'aloo gobhi') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'paneer lababdar') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'methi malai paneer') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'veg jal frezzy') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'boiled vegetables') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'paneer handi') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'paneer dilruba') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'paneer shahi korma') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    if (name === 'mushroom kofta') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'palak mutter') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'palak mushroom') 
      return 'https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=200&h=200&fit=crop';
    if (name === 'spl. aloo jeera') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'veg jaipuri') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'methi malai mutter') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'veg tari') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'kaju mutter') 
      return 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&h=200&fit=crop';
    if (name === 'paneer kalimirch masala') 
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=200&h=200&fit=crop';
    
    // ----- NON-VEG MAIN COURSE -----
    if (name.includes('cream chicken')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken nice')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('butter chicken')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken ghar jaisa')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken kadhai')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken tawa')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken masala')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken handi')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken bharta')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken lemon chinese')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken lemon indian')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('murg hydrabadi')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('murg muglai')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken dopyaza')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('rara chicken')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken kofta')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken curry per plate')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name === 'chicken tari') 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken kali mirch')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chicken tikka butter masala')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name === 'egg curry') 
      return 'https://images.unsplash.com/photo-1587486913049-53fc8894cfc4?w=200&h=200&fit=crop';
    if (name.includes('chicken keema curry')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('mutton home style')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('methi malai chicken')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('murg mussalam')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('dahi chicken')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chick garlic')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('chick finger')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    if (name.includes('murg amritsari')) 
      return 'https://images.unsplash.com/photo-1604908177453-7462950a33a9?w=200&h=200&fit=crop';
    
    // ----- DESSERT -----
    if (name === 'ice cream (vanilla | strawberry)') 
      return 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop';
    if (name === 'ice cream (b. scotch | k. kishmish | mix fruit)') 
      return 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=200&h=200&fit=crop';
    if (name === 'fruit cream') 
      return 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop';
    if (name === 'tutty fruity (celebration spl.)') 
      return 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=200&h=200&fit=crop';
    if (name === 'gulab jamun (2pc)') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'gajrela') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    
    // ----- COMBOS -----
    if (name === 'mini thali') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name === 'super deluxe thali') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    if (name === 'nice spl. thali') 
      return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
    
    // ----- ADDITIONAL ITEMS -----
    if (name === 'veg burger') 
      return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop';
    if (name === 'cheese burger') 
      return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop';
    if (name === 'chaat papdi') 
      return 'https://images.unsplash.com/photo-1567186937675-a5131e8f89ea?w=200&h=200&fit=crop';
    if (name === 'red sause pasta') 
      return 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&h=200&fit=crop';
    if (name === 'white sause pasta') 
      return 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&h=200&fit=crop';
    if (name === 'cheese pizza') 
      return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop';
    if (name === 'corn pizza') 
      return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop';
    if (name === 'onion pizza') 
      return 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop';
    if (name === 'masala dosa') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'onion dosa') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'plain dosa') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    if (name === 'dahi bhala') 
      return 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop';
    
    // Default fallback image
    return 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop';
  };

  // ... rest of your code remains exactly the same ...

  const menuData = {
    beverages: {
      title: 'Beverages',
      items: [
        { name: 'Lassi Sweet/Salt', price: '60' },
        { name: 'Mineral Water', price: '20' },
        { name: 'Fresh Lime Soda', price: '70' },
        { name: 'Fresh Lime Water', price: '60' },
        { name: 'Soda (600ml)', price: '40' },
        { name: 'Lime Cordial Juice (30ml)', price: '40' },
        { name: 'Soft Drink (300ml)', price: '30' },
        { name: 'Soft Drink (500ml)', price: '50' },
        { name: 'Soft Drink (1Ltr)', price: '70' },
        { name: 'Ice Cube Basket', price: '40' },
        { name: 'Milk', price: '50' },
        { name: 'Hot Coffee', price: '50' },
        { name: 'Cold Coffee', price: '80' },
        { name: 'Cold Coffee with Ice Cream', price: '90' },
        { name: 'Black Tea', price: '30' },
        { name: 'Elaichi Flavour Tea', price: '20' }
      ]
    },
    juice: {
      title: 'Juice',
      items: [
        { name: 'Pineapple', price: '70' },
        { name: 'Orange', price: '70' },
        { name: 'Guava', price: '70' },
        { name: 'Mango', price: '70' },
        { name: 'Apple', price: '70' },
        { name: 'Mix Juice', price: '70' }
      ]
    },
    shakes: {
      title: 'Shakes',
      items: [
        { name: 'Vanilla', price: '80' },
        { name: 'Butter Scotch', price: '80' },
        { name: 'Chocolate', price: '80' },
        { name: 'Tutti Fruit Shake', price: '100' },
        { name: 'Kaju Kishmish Shake', price: '80' },
        { name: 'Milk Shake', price: '70' }
      ]
    },
    breakfast: {
      title: 'Breakfast',
      items: [
        { name: 'Veg Sandwich (Cold)', price: '80' },
        { name: 'Veg Sandwich (Grilled)', price: '120' },
        { name: 'Non-Veg Sandwich (Grilled)', price: '220' },
        { name: 'Butter Toast', price: '70' },
        { name: 'Toast with Egg', price: '100' },
        { name: 'Jam Toast', price: '100' },
        { name: 'Omelette with Slice (2 Pcs.)', price: '120' },
        { name: 'Bread Slice (2Pcs)', price: '30' }
      ]
    },
    soups: {
      title: 'Soups',
      items: [
        { name: 'Tomato Soup', price: '80' },
        { name: 'Veg Soup', price: '80' },
        { name: 'Clear Soup (Veg/Chicken)', price: '100 | 130' },
        { name: 'Hot Sour Soup (Veg/Chicken)', price: '100 | 130' },
        { name: 'Wonton Soup (Veg/Chicken)', price: '100 | 130' },
        { name: 'Sweet Corn Soup (Veg/Chicken)', price: '100 | 130' },
        { name: 'Manchow Soup (Veg/Chicken)', price: '100 | 130' },
        { name: 'Talumein Soup (Veg/Chicken)', price: '100 | 130' },
        { name: 'Lemon Corriender (Veg/Chicken)', price: '100 | 130' },
        { name: 'Chicken Soup', price: '130' }
      ],
      note: 'For 1x2 Rs. 20 Will Be Extra'
    },
    vegStarters: {
      title: 'Veg Starters',
      items: [
        { name: 'Paneer Papdi Kabab', price: '200' },
        { name: 'Cheese Ball', price: '250' },
        { name: 'Paneer Candy', price: '250' },
        { name: 'Veg Ball', price: '230' },
        { name: 'Cheese Corn Ball', price: '280' },
        { name: 'Crispy Corn', price: '170' },
        { name: 'Dry Papad/Fry Papad', price: '30' },
        { name: 'Masala Papad', price: '70' },
        { name: 'Veg Bar Salad', price: '180' },
        { name: 'Mushroom Double Decker', price: '280' },
        { name: 'Mushroom Duplex', price: '200' },
        { name: 'Chana Chaat', price: '100' },
        { name: 'Plain Peanut', price: '90' },
        { name: 'Peanut Massala', price: '100' },
        { name: 'Mix Chaat', price: '130' },
        { name: 'Veg Pakora', price: '150' },
        { name: 'Paneer Pakora', price: '250' },
        { name: 'Hara Bhara Cocktail Kabab', price: '160' },
        { name: 'Veg Cutlet', price: '220' },
        { name: 'Cheese Finger', price: '200' },
        { name: 'Plain Paneer with Collandu', price: '250' },
        { name: 'Cheese Corn Roll', price: '200' },
        { name: 'Palak Cheese Corn Roll', price: '280' }
      ]
    },
    tandooriVeg: {
      title: 'Tandoori Veg Starters',
      items: [
        { name: 'Paneer Tikka', price: '270' },
        { name: 'Vegetable Seekh Kabab', price: '280' },
        { name: 'Mushroom Tikka', price: '270' },
        { name: 'Paneer Haryali Tikka', price: '270' },
        { name: 'Paneer Malai Tikka', price: '270' },
        { name: 'Lemon Paneer Tikka', price: '270' },
        { name: 'Tandoori Veg Platter', price: '430' },
        { name: 'Mushroom Achari Tikka', price: '280' },
        { name: 'Mushroom Ajwain Tikka', price: '280' },
        { name: 'Tandoori Gobhi', price: '280' },
        { name: 'Bharwa Aloo', price: '250' }
      ]
    },
    chineseVeg: {
      title: 'Chinese Veg Starters',
      items: [
        { name: 'Mushroom Garlic', price: '300' },
        { name: 'Thai Ball', price: '260' },
        { name: 'Veg Manchurian (Dry/Gravy)', price: '200' },
        { name: 'Cheese Manchurian', price: '300' },
        { name: 'Mix Veg Spring Roll', price: '200' },
        { name: 'Cheese Spring Roll', price: '200' },
        { name: 'Chilli Potato', price: '250' },
        { name: 'Crispy Veg Chilly', price: '250' },
        { name: 'Cheese Chilly (Dry/Gravy)', price: '280-300' },
        { name: 'Mushroom Chilly', price: '280' },
        { name: 'Veg Bullet', price: '200' },
        { name: 'Veg Cocktail Kabab', price: '180' },
        { name: 'Honey Chilly Potato', price: '200' },
        { name: 'Honey Chilly Cauliflower', price: '120' },
        { name: 'French Fry (Indian Style)', price: '120' },
        { name: 'French Fry (American Style)', price: '170' },
        { name: 'Veg Noodle', price: '150' },
        { name: 'Cheese Noodle', price: '200' },
        { name: 'Singhapuri Chowmin', price: '200' },
        { name: 'Garlic Noodles Veg', price: '180' },
        { name: 'Veg Hakka Noodles', price: '180' },
        { name: 'Veg Fried Rice', price: '220' },
        { name: 'Cheese Fried Rice', price: '250' },
        { name: 'Chicken Hakka Noodles', price: '200' }
      ]
    },
    nonVegStarters: {
      title: 'Non-Veg Starters',
      items: [
        { name: 'Crispy Honey Chicken (Half)', price: '300' },
        { name: 'Crispy Honey Chicken (Full)', price: '450' },
        { name: 'Chicken Lollipop (4PC - Half)', price: '250' },
        { name: 'Chicken Lollipop (8PC - Full)', price: '450' },
        { name: 'Egg Chilly', price: '250' },
        { name: 'Chilly Chicken (Dry/Gravy - Half)', price: '300' },
        { name: 'Chilly Chicken (Dry/Gravy - Full)', price: '450' },
        { name: 'Chilly Chicken Boneless (Half)', price: '320' },
        { name: 'Chilly Chicken Boneless (Full)', price: '450' },
        { name: 'Chicken Fried Rice', price: '270' },
        { name: 'Egg Fried Rice', price: '250' },
        { name: 'Chicken Spring Roll', price: '250' },
        { name: 'Chicken Manchurian (Half)', price: '300' },
        { name: 'Chicken Manchurian (Full)', price: '450' },
        { name: 'Egg Chowmin', price: '220' },
        { name: 'Chicken Chowmin', price: '300' },
        { name: 'Chicken 65 (Half)', price: '300' },
        { name: 'Chicken 65 (Full)', price: '450' },
        { name: 'Chicken Pakora (Half)', price: '300' },
        { name: 'Chicken Pakora (Full)', price: '450' },
        { name: 'Chicken Pakora KFC (Half)', price: '300' },
        { name: 'Chicken Pakora KFC (Full)', price: '470' }
      ]
    },
    tandooriNonVeg: {
      title: 'Tandoori Non-Veg Starters',
      items: [
        { name: 'Afghani Chicken (Simple - Half)', price: '300' },
        { name: 'Afghani Chicken (Simple - Full)', price: '450' },
        { name: 'Tandoori Chicken (Half)', price: '280' },
        { name: 'Tandoori Chicken (Full)', price: '450' },
        { name: 'Kalami Kabab (8PC - Half)', price: '300' },
        { name: 'Kalami Kabab (4PC - Full)', price: '450' },
        { name: 'Chicken Cheese Kabab', price: '350' },
        { name: 'Chicken Achari Tikka', price: '350' },
        { name: 'Murg Kali Mirch Tikka', price: '350' },
        { name: 'Stuffed Afgani Chicken Full', price: '550' },
        { name: 'Pudina Chicken (Half)', price: '300' },
        { name: 'Pudina Chicken (Full)', price: '450' },
        { name: 'Stuff Tangri Peminan (2PC - Half)', price: '300' },
        { name: 'Stuff Tangri Peminan (4PC - Full)', price: '450' },
        { name: 'White Tandoori Chicken (Half)', price: '300' },
        { name: 'White Tandoori Chicken (Full)', price: '470' },
        { name: 'Chicken Seekh Kabab', price: '350' },
        { name: 'Chicken Malai Tikka', price: '350' },
        { name: 'Chicken Tikka', price: '350' },
        { name: 'Non-Veg Platter (Bar Salad)', price: '600' }
      ]
    },
    salad: {
      title: 'Salad',
      items: [
        { name: 'Green Salad', price: '70' },
        { name: 'Onion Salad', price: '50' },
        { name: 'Kachumber Salad', price: '60' },
        { name: 'Cream Kachumber Salad', price: '100' }
      ]
    },
    raita: {
      title: 'Raita',
      items: [
        { name: 'Mix Veg Raita', price: '80' },
        { name: 'Aloo Raita', price: '80' },
        { name: 'Pineapple Raita', price: '130' },
        { name: 'Bundi Raita', price: '100' },
        { name: 'Mint Raita', price: '100' },
        { name: 'Plain Curd Raita', price: '60' }
      ]
    },
    rice: {
      title: 'Rice',
      items: [
        { name: 'Plain Rice', price: '100' },
        { name: 'Jeera Rice', price: '120' },
        { name: 'Veg Pulao', price: '150' },
        { name: 'Mutter Pulao', price: '130' },
        { name: 'Veg Biryani', price: '170' },
        { name: 'Chicken Biryani', price: '280' },
        { name: 'Chicken Hyderabadi Biryani', price: '250' },
        { name: 'Egg Pulao', price: '220' },
        { name: 'Egg Biryani with Gravy', price: '240' }
      ]
    },
    breads: {
      title: 'Breads',
      items: [
        { name: 'Plain Prantha', price: '30' },
        { name: 'Lachha Prantha', price: '50' },
        { name: 'Stuff Prantha (Gobhi/Aloo/Mix Veg.)', price: '60' },
        { name: 'Plain Roti', price: '15' },
        { name: 'Onion Roti', price: '25' },
        { name: 'Onion Roti with Butter', price: '25' },
        { name: 'Butter Roti', price: '20' },
        { name: 'Missi Roti', price: '25' },
        { name: 'Onion Missi Roti', price: '30' },
        { name: 'Missi Roti with Butter', price: '40' },
        { name: 'Plain Naan', price: '40' },
        { name: 'Butter Naan', price: '50' },
        { name: 'Cheese Naan', price: '80' },
        { name: 'Stuff Naan (Mix Veg.)', price: '80' },
        { name: 'Amritsari Naan', price: '100' },
        { name: 'Stuff Kulcha (Aloo/Onion/Veg.)', price: '80' },
        { name: 'Tawa Roti', price: '20' },
        { name: 'Garlic Naan', price: '80' },
        { name: 'Cheese/Stuff Naan with Gravy', price: '120' },
        { name: 'Chicken Keema/Parantha/Naan', price: '150' },
        { name: 'Egg Prantha/Naan', price: '80' }
      ],
      butter: {
        title: 'Amul Butter',
        items: [
          { name: 'Quarter', price: '25' },
          { name: 'Half', price: '50' },
          { name: 'Full', price: '90' }
        ]
      }
    },
    vegMain: {
      title: 'Veg Main Course',
      items: [
        { name: 'Dal Makhani', price: '170' },
        { name: 'Dal Balti', price: '220' },
        { name: 'Dal Fry', price: '150' },
        { name: 'Yellow Dal', price: '150' },
        { name: 'Mix Vegetable', price: '200' },
        { name: 'Kaju Curry', price: '300' },
        { name: 'Dam Aloo', price: '220' },
        { name: 'Dam Aloo Kashmiri', price: '250' },
        { name: 'Malai Kofta', price: '250' },
        { name: 'Mushroom Masala', price: '250' },
        { name: 'Chana Masala', price: '220' },
        { name: 'Mushroom Do Payaza', price: '230' },
        { name: 'Mushroom Kadahi', price: '230' },
        { name: 'Mutter Mushroom', price: '230' },
        { name: 'Shahi Paneer', price: '250' },
        { name: 'Paneer Tikka Butter Masala', price: '280' },
        { name: 'Paneer Butter Masala', price: '250' },
        { name: 'Palak Paneer', price: '250' },
        { name: 'Mutter Paneer', price: '250' },
        { name: 'Karahi Paneer', price: '280' },
        { name: 'Paneer Pasanda', price: '250' },
        { name: 'Cheese Tomato', price: '250' },
        { name: 'Paneer Do Payaza', price: '270' },
        { name: 'Paneer Bhurji', price: '220' },
        { name: 'Palak Kofta', price: '250' },
        { name: 'Mutter Masala', price: '250' },
        { name: 'Aloo Mutter', price: '150' },
        { name: 'Aloo Gobhi', price: '150' },
        { name: 'Paneer Lababdar', price: '220' },
        { name: 'Methi Malai Paneer', price: '230' },
        { name: 'Veg Jal Frezzy', price: '220' },
        { name: 'Boiled Vegetables', price: '220' },
        { name: 'Paneer Handi', price: '230' },
        { name: 'Paneer Dilruba', price: '230' },
        { name: 'Paneer Shahi Korma', price: '250' },
        { name: 'Mushroom Kofta', price: '250' },
        { name: 'Palak Mutter', price: '250' },
        { name: 'Palak Mushroom', price: '250' },
        { name: 'Spl. Aloo Jeera', price: '220' },
        { name: 'Veg Jaipuri', price: '220' },
        { name: 'Methi Malai Mutter', price: '250' },
        { name: 'Veg Tari', price: '180' },
        { name: 'Kaju Mutter', price: '300' },
        { name: 'Paneer Kalimirch Masala', price: '300' }
      ]
    },
    nonVegMain: {
      title: 'Non-Veg Main Course',
      note: 'Boneless Chicken - Extra Rs 25 | 35',
      items: [
        { name: 'Cream Chicken (Half)', price: '300' },
        { name: 'Cream Chicken (Full)', price: '450' },
        { name: 'Chicken Nice (Half)', price: '300' },
        { name: 'Chicken Nice (Full)', price: '450' },
        { name: 'Butter Chicken (Half)', price: '300' },
        { name: 'Butter Chicken (Full)', price: '450' },
        { name: 'Chicken Ghar Jaisa (Half)', price: '300' },
        { name: 'Chicken Ghar Jaisa (Full)', price: '450' },
        { name: 'Chicken Kadhai (Half)', price: '300' },
        { name: 'Chicken Kadhai (Full)', price: '450' },
        { name: 'Chicken Tawa (Half)', price: '300' },
        { name: 'Chicken Tawa (Full)', price: '450' },
        { name: 'Chicken Masala (Half)', price: '300' },
        { name: 'Chicken Masala (Full)', price: '450' },
        { name: 'Chicken Handi (Half)', price: '300' },
        { name: 'Chicken Handi (Full)', price: '450' },
        { name: 'Chicken Bharta (Half)', price: '300' },
        { name: 'Chicken Bharta (Full)', price: '450' },
        { name: 'Chicken Lemon Chinese (Half)', price: '300' },
        { name: 'Chicken Lemon Chinese (Full)', price: '450' },
        { name: 'Chicken Lemon Indian Gravy (Half)', price: '300' },
        { name: 'Chicken Lemon Indian Gravy (Full)', price: '450' },
        { name: 'Murg Hydrabadi (Half)', price: '300' },
        { name: 'Murg Hydrabadi (Full)', price: '450' },
        { name: 'Murg Muglai (Half)', price: '300' },
        { name: 'Murg Muglai (Full)', price: '450' },
        { name: 'Chicken Dopyaza (Half)', price: '300' },
        { name: 'Chicken Dopyaza (Full)', price: '450' },
        { name: 'Rara Chicken (Half)', price: '300' },
        { name: 'Rara Chicken (Full)', price: '500' },
        { name: 'Chicken Kofta (8 Pcs)', price: '400' },
        { name: 'Chicken Curry per Plate (with Leg Pcs)', price: '250' },
        { name: 'Chicken Tari', price: '200' },
        { name: 'Chicken Kali Mirch (Half)', price: '330' },
        { name: 'Chicken Kali Mirch (Full)', price: '480' },
        { name: 'Chicken Tikka Butter Masala (Half)', price: '330' },
        { name: 'Chicken Tikka Butter Masala (Full)', price: '480' },
        { name: 'Egg Curry', price: '200' },
        { name: 'Chicken Keema Curry (Per Plate)', price: '350' },
        { name: 'Mutton Home Style (Per Plate)', price: '500' },
        { name: 'Methi Malai Chicken (Half)', price: '350' },
        { name: 'Methi Malai Chicken (Full)', price: '450' },
        { name: 'Murg Mussalam', price: '550' },
        { name: 'Dahi Chicken (Half)', price: '300' },
        { name: 'Dahi Chicken (Full)', price: '450' },
        { name: 'Chick Garlic (Half)', price: '300' },
        { name: 'Chick Garlic (Full)', price: '450' },
        { name: 'Chick Finger', price: '350' },
        { name: 'Murg Amritsari (Half)', price: '350' },
        { name: 'Murg Amritsari (Full)', price: '450' }
      ]
    },
    dessert: {
      title: 'Dessert',
      items: [
        { name: 'Ice Cream (Vanilla | Strawberry)', price: '80' },
        { name: 'Ice Cream (B. Scotch | K. Kishmish | Mix Fruit)', price: '100' },
        { name: 'Fruit Cream', price: '130' },
        { name: 'Tutty Fruity (Celebration Spl.)', price: '120' },
        { name: 'Gulab Jamun (2PC)', price: '60' },
        { name: 'Gajrela', price: '100' }
      ]
    },
    combos: {
      title: 'Combos',
      items: [
        { name: 'Mini Thali', price: '120' },
        { name: 'Super Deluxe Thali', price: '180', desc: '1 Dal + 1 Paneer + 4 Roti + Rice + Raita + Pickle + Salad' },
        { name: 'Nice Spl. Thali', price: '280', desc: '1 Dal + 1 Paneer + 4 Roti + Rice + Raita + Pickle + Salad + Dessert' }
      ]
    },
    additional: {
      title: 'Additional Items',
      items: [
        { name: 'Veg Burger', price: '50' },
        { name: 'Cheese Burger', price: '70' },
        { name: 'Chaat Papdi', price: '70' },
        { name: 'Red Sause Pasta', price: '170' },
        { name: 'White Sause Pasta', price: '200' },
        { name: 'Cheese Pizza', price: '150' },
        { name: 'Corn Pizza', price: '120' },
        { name: 'Onion Pizza', price: '100' },
        { name: 'Masala Dosa', price: '150' },
        { name: 'Onion Dosa', price: '120' },
        { name: 'Plain Dosa', price: '100' },
        { name: 'Dahi Bhala', price: '70' }
      ]
    }
  };

  const categories = [
    { id: 'all', label: '📋 All Categories' },
    { id: 'beverages', label: '🥤 Beverages' },
    { id: 'juice', label: '🧃 Juice' },
    { id: 'shakes', label: '🥛 Shakes' },
    { id: 'breakfast', label: '🍳 Breakfast' },
    { id: 'soups', label: '🍜 Soups' },
    { id: 'vegStarters', label: '🥗 Veg Starters' },
    { id: 'tandooriVeg', label: '🔥 Tandoori Veg' },
    { id: 'chineseVeg', label: '🥢 Chinese Veg' },
    { id: 'nonVegStarters', label: '🍗 Non-Veg Starters' },
    { id: 'tandooriNonVeg', label: '🔥 Tandoori Non-Veg' },
    { id: 'salad', label: '🥬 Salad' },
    { id: 'raita', label: '🥛 Raita' },
    { id: 'rice', label: '🍚 Rice' },
    { id: 'breads', label: '🍞 Breads' },
    { id: 'vegMain', label: '🫕 Veg Main' },
    { id: 'nonVegMain', label: '🍖 Non-Veg Main' },
    { id: 'dessert', label: '🍰 Dessert' },
    { id: 'combos', label: '🍱 Combos' },
    { id: 'additional', label: '➕ Additional' }
  ];

  const getCategoryItems = (categoryId) => {
    return menuData[categoryId] || { items: [] };
  };

  const getCategoryLabel = (id) => {
    const cat = categories.find(c => c.id === id);
    return cat ? cat.label : 'All Categories';
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.menu-dropdown')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Render menu item with images
  const renderMenuItem = (item) => {
    const imageUrl = getFoodImage(item.name);
    return (
      <div key={item.name} className="menu-item">
        <div className="menu-item-left">
          <img 
            src={imageUrl} 
            alt={item.name} 
            className="menu-item-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=100&h=100&fit=crop';
            }}
          />
          <div className="menu-item-info">
            <span className="menu-item-name">{item.name}</span>
            {item.desc && <span className="menu-item-desc">{item.desc}</span>}
          </div>
        </div>
        <span className="menu-item-price">₹{item.price}</span>
      </div>
    );
  };

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-content">
          <h1 className="menu-hero-title">Our Menu</h1>
          <div className="menu-hero-underline"></div>
          <p className="menu-hero-subtitle">
            Experience the finest flavors crafted with passion and tradition
          </p>
        </div>
      </div>

      <div className="menu-container">
        {/* Dropdown Filter */}
        <div className="menu-filter-wrapper">
          <div className="menu-dropdown">
            <button 
              className="menu-dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="dropdown-icon">📋</span>
              <span className="dropdown-label">{getCategoryLabel(activeCategory)}</span>
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▾</span>
            </button>
            
            {isDropdownOpen && (
              <div className="menu-dropdown-menu">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`dropdown-item ${activeCategory === cat.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <span className="dropdown-item-icon">{cat.label.split(' ')[0]}</span>
                    <span className="dropdown-item-label">{cat.label.split(' ').slice(1).join(' ')}</span>
                    {activeCategory === cat.id && <span className="dropdown-item-check">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="menu-filter-info">
            {activeCategory !== 'all' && (
              <button 
                className="menu-filter-clear"
                onClick={() => setActiveCategory('all')}
              >
                ✕ Clear Filter
              </button>
            )}
            <span className="menu-item-count">
              {activeCategory === 'all' 
                ? 'Showing all categories' 
                : `${getCategoryItems(activeCategory).items?.length || 0} items`}
            </span>
          </div>
        </div>

        <div className="menu-content">
          {activeCategory === 'all' ? (
            categories.filter(cat => cat.id !== 'all').map(cat => {
              const data = getCategoryItems(cat.id);
              if (!data.items || data.items.length === 0) return null;
              return (
                <div key={cat.id} className="menu-section">
                  <div className="menu-section-header">
                    <h2 className="menu-section-title">{data.title}</h2>
                    <div className="menu-section-line"></div>
                    {data.note && <p className="menu-section-note">{data.note}</p>}
                  </div>
                  <div className="menu-items">
                    {data.items.map((item) => renderMenuItem(item))}
                  </div>
                  {data.butter && (
                    <div className="menu-subsection">
                      <h3 className="menu-subsection-title">{data.butter.title}</h3>
                      <div className="menu-items">
                        {data.butter.items.map((item) => renderMenuItem(item))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            (() => {
              const data = getCategoryItems(activeCategory);
              if (!data.items || data.items.length === 0) {
                return (
                  <div className="menu-empty">
                    <p>No items found in this category.</p>
                  </div>
                );
              }
              return (
                <div className="menu-section">
                  <div className="menu-section-header">
                    <h2 className="menu-section-title">{data.title}</h2>
                    <div className="menu-section-line"></div>
                    {data.note && <p className="menu-section-note">{data.note}</p>}
                  </div>
                  <div className="menu-items">
                    {data.items.map((item) => renderMenuItem(item))}
                  </div>
                  {data.butter && (
                    <div className="menu-subsection">
                      <h3 className="menu-subsection-title">{data.butter.title}</h3>
                      <div className="menu-items">
                        {data.butter.items.map((item) => renderMenuItem(item))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()
          )}
        </div>

        <div className="menu-footer-note">
          <p>* GST Extra</p>
          <p>Please wait for 30 minutes after placing an order</p>
          <p className="menu-footer-contact">
            Room Service: 62394 95531 | Suggestions: 81465 07977
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;