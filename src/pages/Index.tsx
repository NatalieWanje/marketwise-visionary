
import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, BrainCircuit, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [businessDetails, setBusinessDetails] = useState({
    name: "",
    industry: "",
    target: "",
    goals: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.promise(
      // Simulate API call - replace with actual API integration
      new Promise((resolve) => setTimeout(resolve, 2000)),
      {
        loading: "Analyzing your business...",
        success: "Analysis complete!",
        error: "Error analyzing business"
      }
    );
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 p-6">
      <main className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-10"
        >
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/9a3e92d2-a8d3-4779-8a3e-4a7a3090b610.png" 
              alt="BizBoost Logo" 
              className="w-48 h-48 object-contain animate-float"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
            Transform Your Business
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Leverage AI-powered insights to boost your marketing strategy
          </p>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: <Rocket className="w-8 h-8 text-primary" />,
              title: "Boost Growth",
              description: "Accelerate your business growth with data-driven strategies"
            },
            {
              icon: <BrainCircuit className="w-8 h-8 text-primary" />,
              title: "AI-Powered",
              description: "Get intelligent insights powered by advanced AI algorithms"
            },
            {
              icon: <Sparkles className="w-8 h-8 text-primary" />,
              title: "Custom Strategy",
              description: "Receive personalized recommendations for your business"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className="glass-panel p-6 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Analysis Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="glass-panel p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Get Your Strategy Analysis</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Business Name</label>
              <input
                type="text"
                className="input-field w-full"
                value={businessDetails.name}
                onChange={(e) => setBusinessDetails({ ...businessDetails, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Industry</label>
              <input
                type="text"
                className="input-field w-full"
                value={businessDetails.industry}
                onChange={(e) => setBusinessDetails({ ...businessDetails, industry: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Target Audience</label>
              <input
                type="text"
                className="input-field w-full"
                value={businessDetails.target}
                onChange={(e) => setBusinessDetails({ ...businessDetails, target: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Business Goals</label>
              <textarea
                className="input-field w-full h-32"
                value={businessDetails.goals}
                onChange={(e) => setBusinessDetails({ ...businessDetails, goals: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Analyzing..." : "Get Strategy Analysis"}
            </button>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;
