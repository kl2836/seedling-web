'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FounderPortalPage() {
  // Login state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Dashboard state
  const [activeStep, setActiveStep] = useState<number>(1);
  
  // Step 1: Founder & Company Basics
  const [founderName, setFounderName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");
  const [entityType, setEntityType] = useState("C-Corp");
  
  // Step 2: Business Details & Traction
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [stage, setStage] = useState("Idea");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [numUsers, setNumUsers] = useState("");
  const [milestones, setMilestones] = useState("");
  const [businessSummary, setBusinessSummary] = useState("");
  const [loadingSummary, setLoadingSummary] = useState(false);
  
  // Step 3: Endorsements Setup
  const [endorsementGoal, setEndorsementGoal] = useState("");
  const [endorsementSuggestion, setEndorsementSuggestion] = useState("");
  
  // Step 4: AI Pitch & Story
  const [pitchStory, setPitchStory] = useState("");
  const [aiPitch, setAiPitch] = useState("");
  const [pitchLoading, setPitchLoading] = useState(false);
  
  // Step 5: AI Legal Pack
  const [formCSummary, setFormCSummary] = useState("");
  const [riskFactors, setRiskFactors] = useState<string[]>([]);
  const [useOfProceeds, setUseOfProceeds] = useState("");
  
  const handleLogin = () => {
    if (email === "seedling" && password === "seedling") {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setError('Invalid credentials. For this prototype, use "seedling" / "seedling".');
    }
  };
  
  const handleGenerateSummary = () => {
    setLoadingSummary(true);
    setTimeout(() => {
      setBusinessSummary(
        "Seedling helps early-stage founders raise from their communities by turning social endorsements into measurable demand signals. Current traction includes 500+ early supporters and $15k in monthly GMV flowing through test cohorts."
      );
      setLoadingSummary(false);
    }, 1000);
  };
  
  const handleGenerateEndorsements = () => {
    setEndorsementSuggestion(
      "Start with 100 'Early Believer' endorsements that appear at the top of your public page and 300 'Community Supporter' endorsements. Early Believers can unlock perks like early updates, founder AMAs, and first access to future raises."
    );
  };
  
  const handleGeneratePitch = () => {
    setPitchLoading(true);
    setTimeout(() => {
      setAiPitch(
        "Seedling is a social investing platform where early belief actually matters. Founders can collect endorsements from their communities, then use those signals and AI tooling to prepare a lean, compliant raise. Supporters get a way to back the people and places they care about—long before a traditional funding round."
      );
      setPitchLoading(false);
    }, 1000);
  };
  
  const handleGenerateFormC = () => {
    setFormCSummary(
      "Your company is offering securities under Regulation Crowdfunding. This Form C summary includes your business structure, key personnel, current financials, and the terms of your offering. All information will be filed with the SEC and publicly available."
    );
  };
  
  const handleGenerateRiskFactors = () => {
    setRiskFactors([
      "Early-stage business risk: The company is in its early stages and may not achieve profitability.",
      "Regulatory risk: Changes in securities regulations or crowdfunding rules could impact operations.",
      "Competition risk: The market includes established competitors with greater resources.",
      "Technology risk: Platform development and maintenance require ongoing investment.",
      "Market adoption risk: Success depends on market acceptance and user growth."
    ]);
  };
  
  const handleGenerateUseOfProceeds = () => {
    setUseOfProceeds("40% Product Development • 30% Marketing & Growth • 20% Operations • 10% Legal & Compliance");
  };

  return (
    <main className="min-h-screen bg-[#FAF7F0]">
      <section className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/founders" 
            className="text-sm text-gray-600 hover:text-gray-900 mb-4 inline-flex items-center gap-1"
          >
            ← Back to For Founders page
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-4 mb-2">
            Seedling Founder Portal <span className="text-lg text-gray-500">(Prototype)</span>
          </h1>
          <p className="text-lg text-gray-600">
            Log in to set up your business, endorsements, and AI-powered raise workflow.
          </p>
        </div>

        {!isLoggedIn ? (
          // Login Card
          <div className="mt-8 max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Founder Login (Prototype)</h2>
              <p className="text-gray-600 mb-6">
                Log in to see how Seedling will help you create your business, endorsements, and AI-powered raise.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Enter password"
                  />
                </div>
                
                <button
                  onClick={handleLogin}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Log in
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  For this prototype, use &quot;seedling&quot; as both email and password.
                </p>
                
                {error && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Founder Dashboard
          <div className="mt-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Founder Dashboard</h2>
              <p className="text-gray-600">Prepare your business for endorsements and funding</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <nav className="lg:w-64 flex-shrink-0">
                <div className="bg-white rounded-2xl shadow-sm border p-4 space-y-2">
                  {[
                    { num: 1, label: "Founder & Company Basics" },
                    { num: 2, label: "Business Details & Traction" },
                    { num: 3, label: "Endorsements Setup" },
                    { num: 4, label: "AI Pitch & Story" },
                    { num: 5, label: "AI Legal Pack (Form C & Docs)" },
                    { num: 6, label: "Raise Readiness Overview" }
                  ].map((step) => (
                    <button
                      key={step.num}
                      onClick={() => setActiveStep(step.num)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeStep === step.num
                          ? 'bg-green-600/10 text-green-700 font-bold'
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <span className="mr-2">{step.num}.</span>
                      {step.label}
                    </button>
                  ))}
                </div>
              </nav>
              
              {/* Main Content Area */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl shadow-sm border p-6 space-y-6">
                  
                  {/* Step 1: Founder & Company Basics */}
                  {activeStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Founder & Company Basics</h3>
                        <p className="text-sm text-gray-600 mb-6">
                          We&apos;ll use this to pre-fill your raise page and future legal documents.
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Founder Name</label>
                        <input
                          type="text"
                          value={founderName}
                          onChange={(e) => setFounderName(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Company Name</label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Website</label>
                        <input
                          type="text"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          placeholder="https://yourcompany.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Location</label>
                        <input
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          placeholder="San Francisco, CA"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Entity Type</label>
                        <select
                          value={entityType}
                          onChange={(e) => setEntityType(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        >
                          <option>LLC</option>
                          <option>C-Corp</option>
                          <option>S-Corp</option>
                          <option>Sole Proprietorship</option>
                        </select>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Business Details & Traction */}
                  {activeStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Details & Traction</h3>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Industry</label>
                        <input
                          type="text"
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          placeholder="e.g., Fintech, SaaS, Consumer"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Short Description</label>
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          rows={3}
                          placeholder="What does your business do?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Stage</label>
                        <select
                          value={stage}
                          onChange={(e) => setStage(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        >
                          <option>Idea</option>
                          <option>MVP</option>
                          <option>Launched</option>
                          <option>Scaling</option>
                        </select>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Monthly Revenue (optional)</label>
                          <input
                            type="number"
                            value={monthlyRevenue}
                            onChange={(e) => setMonthlyRevenue(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="0"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-900 mb-2">Number of Users/Customers (optional)</label>
                          <input
                            type="number"
                            value={numUsers}
                            onChange={(e) => setNumUsers(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                            placeholder="0"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Notable Milestones</label>
                        <textarea
                          value={milestones}
                          onChange={(e) => setMilestones(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          rows={3}
                          placeholder="Key achievements, partnerships, press, etc."
                        />
                      </div>
                      
                      <div>
                        <button
                          onClick={handleGenerateSummary}
                          disabled={loadingSummary}
                          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                          {loadingSummary ? 'Generating...' : 'Generate summary with AI (prototype)'}
                        </button>
                      </div>
                      
                      {businessSummary && (
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">AI-Generated Summary</h4>
                          <p className="text-sm text-gray-600">{businessSummary}</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Step 3: Endorsements Setup */}
                  {activeStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Endorsements Setup</h3>
                        <p className="text-sm text-gray-600 mb-6">
                          Endorsements are Seedling&apos;s pre-raise signal: people can support you before they invest, and you can reward your earliest believers.
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Desired Endorsement Goal</label>
                        <input
                          type="number"
                          value={endorsementGoal}
                          onChange={(e) => setEndorsementGoal(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          placeholder="e.g., 500"
                        />
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Endorsement Tiers</h4>
                        <div className="space-y-3">
                          <div className="border border-gray-300 rounded-lg p-3">
                            <input
                              type="text"
                              className="w-full font-medium text-gray-900 mb-2 border-none focus:outline-none"
                              placeholder="Tier name (e.g., Early Believers)"
                            />
                            <textarea
                              className="w-full text-sm text-gray-600 border-none focus:outline-none"
                              rows={2}
                              placeholder="Description and perks"
                            />
                          </div>
                          
                          <div className="border border-gray-300 rounded-lg p-3">
                            <input
                              type="text"
                              className="w-full font-medium text-gray-900 mb-2 border-none focus:outline-none"
                              placeholder="Tier name (e.g., Community Supporters)"
                            />
                            <textarea
                              className="w-full text-sm text-gray-600 border-none focus:outline-none"
                              rows={2}
                              placeholder="Description and perks"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <button
                          onClick={handleGenerateEndorsements}
                          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                        >
                          Suggest endorsement structure with AI (prototype)
                        </button>
                      </div>
                      
                      {endorsementSuggestion && (
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">AI Suggestion</h4>
                          <p className="text-sm text-gray-600">{endorsementSuggestion}</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Step 4: AI Pitch & Story */}
                  {activeStep === 4 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Pitch & Story</h3>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">Your story in your own words</label>
                        <textarea
                          value={pitchStory}
                          onChange={(e) => setPitchStory(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                          rows={5}
                          placeholder="Tell us about your business, why you started it, and what problem you're solving..."
                        />
                      </div>
                      
                      <div>
                        <button
                          onClick={handleGeneratePitch}
                          disabled={pitchLoading}
                          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                          {pitchLoading ? 'Generating...' : 'Generate investor-ready pitch with AI (prototype)'}
                        </button>
                      </div>
                      
                      {aiPitch && (
                        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">AI-Refined Pitch</h4>
                          <p className="text-gray-600 mb-4">{aiPitch}</p>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">•</span>
                              <div>
                                <strong className="text-gray-900">Problem:</strong>
                                <span className="text-gray-600 ml-1">Early-stage founders lack tools to capture and leverage community belief before traditional fundraising.</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">•</span>
                              <div>
                                <strong className="text-gray-900">Solution:</strong>
                                <span className="text-gray-600 ml-1">A persistent platform for collecting endorsements, building social proof, and converting community support into funding.</span>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">•</span>
                              <div>
                                <strong className="text-gray-900">Why now / Traction:</strong>
                                <span className="text-gray-600 ml-1">Growing creator economy, regulatory support for crowdfunding, and proven early demand with 500+ supporters.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Step 5: AI Legal Pack */}
                  {activeStep === 5 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Legal Pack (Prototype)</h3>
                        <p className="text-sm text-gray-600 mb-6">
                          Seedling will eventually use AI + partners to pre-fill Form C and related documents when founders are ready to raise under Reg CF.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Document Checklist</h4>
                        <div className="space-y-2 text-sm">
                          {[
                            "Entity details",
                            "Directors & officers info",
                            "Ownership & cap table overview",
                            "High-level financials",
                            "Risk factors",
                            "Use of proceeds",
                            "Form C summary"
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-4 h-4 rounded border border-gray-300 bg-white" />
                              <span className="text-gray-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Form C Summary */}
                      <div className="border border-gray-300 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Form C Summary (Preview)</h4>
                        <button
                          onClick={handleGenerateFormC}
                          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors mb-4"
                        >
                          Generate Form C summary with AI (prototype)
                        </button>
                        {formCSummary && (
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <p className="text-sm text-gray-600">{formCSummary}</p>
                          </div>
                        )}
                      </div>
                      
                      {/* Risk Factors */}
                      <div className="border border-gray-300 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Risk Factors (Preview)</h4>
                        <button
                          onClick={handleGenerateRiskFactors}
                          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors mb-4"
                        >
                          Generate sample risk factors (prototype)
                        </button>
                        {riskFactors.length > 0 && (
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <ul className="space-y-2">
                              {riskFactors.map((risk, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                  <span className="text-green-600 font-bold">•</span>
                                  <span>{risk}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* Use of Proceeds */}
                      <div className="border border-gray-300 rounded-lg p-4">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Use of Proceeds (Preview)</h4>
                        <button
                          onClick={handleGenerateUseOfProceeds}
                          className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors mb-4"
                        >
                          Suggest allocation with AI (prototype)
                        </button>
                        {useOfProceeds && (
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <p className="text-sm font-medium text-gray-900">{useOfProceeds}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-xs text-yellow-900">
                          <strong>Disclaimer:</strong> These AI drafts are for illustration only and do not constitute legal advice. In production, Seedling will help you work with qualified partners to review and file your documents.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 6: Raise Readiness Overview */}
                  {activeStep === 6 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Raise Readiness Overview</h3>
                      </div>
                      
                      <div className="text-center py-8">
                        <div className="inline-block">
                          <div className="text-6xl font-bold text-green-600 mb-2">72%</div>
                          <p className="text-lg text-gray-600">ready to collect endorsements</p>
                        </div>
                      </div>
                      
                      <div>
                        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
                          <div className="bg-green-600 h-full rounded-full" style={{ width: '72%' }} />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="border border-gray-300 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-3">Section Status</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Basics</span>
                              <span className="text-green-600 font-medium">Complete</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Business Details</span>
                              <span className="text-yellow-600 font-medium">In Progress</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Endorsements</span>
                              <span className="text-yellow-600 font-medium">In Progress</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Pitch</span>
                              <span className="text-gray-400 font-medium">Not Started</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-gray-600">Legal Pack</span>
                              <span className="text-gray-400 font-medium">Not Started</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border border-gray-300 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 mb-3">Next Actions</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">→</span>
                              <span>Finalize your pitch and endorsement structure.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">→</span>
                              <span>Upload final financials and verify your entity details.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 font-bold">→</span>
                              <span>Review AI-drafted legal text with your attorney or Seedling partners.</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-6 border border-green-200 text-center">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to launch?</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Once you complete all sections, you&apos;ll be able to publish your Seedling page and start collecting endorsements.
                        </p>
                        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                          Publish Your Page
                        </button>
                      </div>
                    </div>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

