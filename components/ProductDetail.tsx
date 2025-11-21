/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Product, Review } from '../types';

interface ProductDetailProps {
  product: Product;
  reviews: Review[];
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onAddReview: (productId: string, review: Omit<Review, 'id' | 'productId' | 'date'>) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, reviews, onBack, onAddToCart, onAddReview }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  // Mock sizes for demonstration if not in data
  const sizes = ['P', 'M', 'G'];
  const showSizes = product.category === 'Vestíveis';

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1) 
    : null;

  const handleSubmitReview = (e: React.FormEvent) => {
      e.preventDefault();
      if (newReviewName && newReviewComment && newReviewRating > 0) {
          onAddReview(product.id, {
              userName: newReviewName,
              comment: newReviewComment,
              rating: newReviewRating
          });
          setNewReviewName('');
          setNewReviewComment('');
          setNewReviewRating(0);
          setShowReviewForm(false);
      }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Voltar à Loja
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          
          {/* Left: Main Image Only */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/5] bg-[#EBE7DE] overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in-up"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center max-w-xl">
             <span className="text-sm font-medium text-[#A8A29E] uppercase tracking-widest mb-2">{product.category}</span>
             <div className="flex items-center gap-4 mb-4">
                 <h1 className="text-4xl md:text-5xl font-serif text-[#2C2A26]">{product.name}</h1>
                 {averageRating && (
                     <div className="flex items-center gap-1 bg-[#2C2A26] text-[#F5F2EB] px-2 py-1 rounded-full text-xs font-medium">
                         <span>★</span>
                         <span>{averageRating}</span>
                     </div>
                 )}
             </div>
             <span className="text-2xl font-light text-[#2C2A26] mb-8">R$ {product.price}</span>
             
             <p className="text-[#5D5A53] leading-relaxed font-light text-lg mb-8 border-b border-[#D6D1C7] pb-8">
               {product.longDescription || product.description}
             </p>

             {showSizes && (
                <div className="mb-8">
                  <span className="block text-xs font-bold uppercase tracking-widest text-[#2C2A26] mb-4">Selecione o Tamanho</span>
                  <div className="flex gap-4">
                    {sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
                          selectedSize === size 
                            ? 'border-[#2C2A26] bg-[#2C2A26] text-[#F5F2EB]' 
                            : 'border-[#D6D1C7] text-[#5D5A53] hover:border-[#2C2A26]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
             )}

             <div className="flex flex-col gap-4">
               <button 
                 onClick={() => onAddToCart(product)}
                 className="w-full py-5 bg-[#2C2A26] text-[#F5F2EB] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] transition-colors"
               >
                 Adicionar ao Carrinho — R$ {product.price}
               </button>
               <ul className="mt-8 space-y-2 text-sm text-[#5D5A53]">
                 {product.features.map((feature, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <span className="w-1 h-1 bg-[#2C2A26] rounded-full"></span>
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-[#D6D1C7] pt-16 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-serif text-[#2C2A26]">Avaliações ({reviews.length})</h2>
                <button 
                    onClick={() => setShowReviewForm(!showReviewForm)}
                    className="text-sm font-medium uppercase tracking-widest text-[#2C2A26] hover:text-[#A8A29E] transition-colors border-b border-[#2C2A26] pb-1"
                >
                    {showReviewForm ? 'Cancelar' : 'Escrever Avaliação'}
                </button>
            </div>

            {/* Review Form */}
            {showReviewForm && (
                <form onSubmit={handleSubmitReview} className="bg-white p-8 mb-12 border border-[#EBE7DE] shadow-sm animate-fade-in-up">
                    <div className="mb-6">
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-2">Sua Nota</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setNewReviewRating(star)}
                                    className={`text-2xl transition-colors ${star <= newReviewRating ? 'text-[#2C2A26]' : 'text-[#D6D1C7]'}`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-2">Seu Nome</label>
                        <input 
                            type="text" 
                            value={newReviewName}
                            onChange={(e) => setNewReviewName(e.target.value)}
                            className="w-full bg-[#F5F2EB] border border-[#D6D1C7] p-3 text-[#2C2A26] outline-none focus:border-[#2C2A26]"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-2">Seu Comentário</label>
                        <textarea 
                            value={newReviewComment}
                            onChange={(e) => setNewReviewComment(e.target.value)}
                            className="w-full bg-[#F5F2EB] border border-[#D6D1C7] p-3 text-[#2C2A26] outline-none focus:border-[#2C2A26] h-32 resize-none"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="bg-[#2C2A26] text-[#F5F2EB] px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#433E38] transition-colors"
                    >
                        Enviar Avaliação
                    </button>
                </form>
            )}

            {/* Reviews List */}
            <div className="space-y-12">
                {reviews.length === 0 ? (
                    <p className="text-[#5D5A53] font-light italic">Ainda não há avaliações para este produto. Seja o primeiro a avaliar.</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="border-b border-[#EBE7DE] last:border-0 pb-8 last:pb-0">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="block font-medium text-[#2C2A26]">{review.userName}</span>
                                    <span className="text-xs text-[#A8A29E] uppercase tracking-wide">{review.date}</span>
                                </div>
                                <div className="flex text-[#2C2A26]">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={i < review.rating ? 'text-[#2C2A26]' : 'text-[#D6D1C7]'}>★</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-[#5D5A53] font-light leading-relaxed">{review.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;