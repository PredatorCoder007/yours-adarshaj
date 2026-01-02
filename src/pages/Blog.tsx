// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import { Calendar, Clock, ArrowLeft, Tag, User } from "lucide-react";
// import { Link } from "react-router-dom";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";

// interface BlogPost {
//   id: string;
//   title: string;
//   excerpt: string;
//   content: string;
//   date: string;
//   readTime: string;
//   category: string;
//   tags: string[];
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: "1",
//     title: "From Data to Decisions: My Journey into Product Strategy",
//     excerpt: "How I transitioned from analysis paralysis to actionable product insights that drive real business outcomes.",
//     content: `When I first stepped into product management, I was drowning in data but starving for insights. Every dashboard told a story, but I couldn't figure out which stories mattered.

// The breakthrough came during a product review where our engagement metrics looked phenomenal, but revenue was flatlining. That's when I learned the most important lesson in product strategy: metrics without context are just vanity numbers.

// I developed a framework I call the "Impact Pyramid" - starting with business outcomes at the top, then user outcomes in the middle, and finally output metrics at the base. This hierarchy helps me prioritize what to measure and when to pivot.

// The key insight? Great product managers don't just collect data; they connect dots between user behavior, business goals, and market opportunities. Every data point should answer the question: "So what?" and "Now what?"

// Today, I approach every product decision with three questions:
// 1. Does this move us closer to our north star metric?
// 2. What would we expect to see if this hypothesis is true?
// 3. How will we know when to double down or course correct?

// This mindset shift from reporting what happened to predicting what should happen next has been the foundation of my growth as a product strategist.`,
//     date: "2024-01-15",
//     readTime: "5 min read",
//     category: "Product Strategy",
//     tags: ["Data", "Strategy", "Product Management"]
//   },
//   {
//     id: "2",
//     title: "Building Products Users Actually Want: Lessons from Failed Features",
//     excerpt: "Three feature launches that taught me more about user empathy than any success story ever could.",
//     content: `Failure is the best teacher, especially in product management. Here are three features I've launched that completely missed the mark, and what they taught me about building products users actually want.

// **Feature #1: The "Smart" Dashboard**
// We built an AI-powered dashboard that automatically surfaced insights. Users ignored it completely. The lesson? Intelligence without agency frustrates users. They wanted to discover insights themselves, not have them served on a silver platter.

// **Feature #2: The Social Collaboration Tool**
// Added social features to a productivity app thinking it would increase engagement. Usage dropped 30%. The lesson? Context matters more than features. Users came to be productive, not social.

// **Feature #3: The Advanced Settings Panel**
// Gave power users 47 new customization options. Support tickets increased 400%. The lesson? More options often mean more confusion. Good defaults beat endless customization.

// What I learned from these failures:

// 1. **Jobs to be Done > Feature Lists**: Users hire products to do specific jobs. If your feature doesn't align with that job, it's noise.

// 2. **Simplicity is Strategy**: Every feature you add is a bet. Most bets lose. Be ruthlessly selective.

// 3. **User Research ≠ User Opinion**: What users say they want and what they actually use are often different things.

// Now, before building any feature, I ask: "What job is this feature hired to do?" If I can't answer clearly, we don't build it.

// The best product managers aren't those who never fail; they're those who fail fast, learn faster, and compound those learnings into better decision-making.`,
//     date: "2024-01-08",
//     readTime: "4 min read",
//     category: "Product Development",
//     tags: ["User Research", "Feature Development", "Lessons Learned"]
//   },
//   {
//     id: "3",
//     title: "The Art of Saying No: A Product Manager's Superpower",
//     excerpt: "Why the best product managers are excellent at declining good ideas to make room for great ones.",
//     content: `The hardest part of being a product manager isn't coming up with ideas—it's saying no to 90% of them.

// Early in my PM career, I said yes to everything. Every stakeholder request, every "quick win," every customer feature demand. The result? A frankenstein product that pleased no one and frustrated everyone.

// The turning point came when our CEO asked a simple question: "If you had to cut 80% of our roadmap tomorrow, what would you keep?" I couldn't answer clearly, which meant we were building without clear priorities.

// **The "No" Framework I've Developed:**

// 1. **Strategic Alignment Test**: Does this move us toward our 3-year vision?
// 2. **Resource Reality Check**: What are we NOT doing if we say yes to this?
// 3. **User Impact Assessment**: Will this meaningfully improve our core user journey?
// 4. **Effort vs. Impact Matrix**: High effort, low impact = automatic no.

// **The Three Types of No:**

// 1. **Hard No**: Conflicts with strategy or values
// 2. **Not Now**: Good idea, wrong timing
// 3. **Maybe Later**: Needs more validation

// The secret sauce? How you say no matters as much as saying it. I've learned to:

// - Acknowledge the value in every request
// - Explain the "why" behind the decision
// - Offer alternatives when possible
// - Document decisions for future reference

// Remember: Every yes to something unimportant is a no to something that could be transformational. Your roadmap should be a carefully curated collection of your best bets, not a wishlist of every possibility.

// The best product managers are curators, not collectors. They understand that saying no is not about being negative—it's about being strategic.`,
//     date: "2023-12-28",
//     readTime: "3 min read",
//     category: "Product Leadership",
//     tags: ["Prioritization", "Strategy", "Leadership"]
//   }
// ];

// const Blog = () => {
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

//   if (selectedPost) {
//     return (
//       <div className="min-h-screen bg-background">
//         <Navigation />
//         <main className="pt-20">
//           <div className="container mx-auto px-6 py-12 max-w-4xl">
//             <Button 
//               variant="ghost" 
//               onClick={() => setSelectedPost(null)}
//               className="mb-8 hover:bg-accent"
//             >
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to Blog
//             </Button>
            
//             <article className="prose prose-lg max-w-none">
//               <header className="mb-8">
//                 <Badge variant="secondary" className="mb-4">
//                   {selectedPost.category}
//                 </Badge>
//                 <h1 className="text-4xl font-bold text-foreground mb-4">
//                   {selectedPost.title}
//                 </h1>
//                 <div className="flex items-center gap-4 text-muted-foreground mb-6">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4" />
//                     <span>{new Date(selectedPost.date).toLocaleDateString('en-US', { 
//                       year: 'numeric', 
//                       month: 'long', 
//                       day: 'numeric' 
//                     })}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Clock className="w-4 h-4" />
//                     <span>{selectedPost.readTime}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <User className="w-4 h-4" />
//                     <span>Alex Rodriguez</span>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {selectedPost.tags.map((tag) => (
//                     <Badge key={tag} variant="outline" className="text-xs">
//                       <Tag className="w-3 h-3 mr-1" />
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>
//               </header>
              
//               <Separator className="mb-8" />
              
//               <div className="text-foreground whitespace-pre-line leading-relaxed">
//                 {selectedPost.content}
//               </div>
//             </article>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-subtle">
//           <div className="container mx-auto px-6 text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
//               Product & Strategy Insights
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
//               Sharing lessons learned from building products, leading teams, and navigating the strategic challenges of modern product management.
//             </p>
//             <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
//               <span>Alex Rodriguez</span>
//               <span>•</span>
//               <span>Product Manager</span>
//               <span>•</span>
//               <span>Strategy Enthusiast</span>
//             </div>
//           </div>
//         </section>

//         {/* Blog Posts */}
//         <section className="py-20">
//           <div className="container mx-auto px-6">
//             <div className="grid gap-8 max-w-4xl mx-auto">
//               {blogPosts.map((post) => (
//                 <Card 
//                   key={post.id} 
//                   className="hover:shadow-elegant transition-all duration-300 cursor-pointer border-border/50 hover:border-primary/20"
//                   onClick={() => setSelectedPost(post)}
//                 >
//                   <CardHeader>
//                     <div className="flex items-center justify-between mb-2">
//                       <Badge variant="secondary">{post.category}</Badge>
//                       <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                         <div className="flex items-center gap-1">
//                           <Calendar className="w-4 h-4" />
//                           <span>{new Date(post.date).toLocaleDateString()}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Clock className="w-4 h-4" />
//                           <span>{post.readTime}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <CardTitle className="text-2xl mb-2 hover:text-primary transition-colors">
//                       {post.title}
//                     </CardTitle>
//                     <CardDescription className="text-base">
//                       {post.excerpt}
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {post.tags.map((tag) => (
//                         <Badge key={tag} variant="outline" className="text-xs">
//                           {tag}
//                         </Badge>
//                       ))}
//                     </div>
//                     <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
//                       Read more →
//                     </Button>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Blog;















///UNDER CONSTRCTION
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Construction } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-grow pt-20 flex items-center justify-center">
        <Card className="max-w-xl w-full text-center p-10 shadow-elegant border-border/50">
          <div className="flex justify-center mb-6">
            <Construction className="w-14 h-14 text-primary" />
          </div>

          <h1 className="text-3xl font-bold mb-4">
            Blog Under Construction
          </h1>

          <p className="text-muted-foreground text-lg">
            I’m currently working on curating thoughtful product, strategy, and
            technology insights.  
            <br />
            <span className="font-medium text-foreground">
              Coming soon 🚀
            </span>
          </p>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
