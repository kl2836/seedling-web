'use client';

import FeedRow from '../FeedRow';

export default function FeedShowcase() {
  return (
    <div className="space-y-3.5 p-3">
      <FeedRow
        type="endorsed"
        name="Sarah Chen"
        action="endorsed"
        timeAgo="2h ago"
        business="Jenny's Kitchen hit 1,000 preorders"
        count={18}
      />
      <FeedRow
        type="invested"
        name="Marcus Johnson"
        action="invested"
        timeAgo="1d ago"
        business="Formo Coffee opened funding window"
      />
      <FeedRow
        type="milestone"
        name="Alex Rivera"
        action="milestone reached"
        timeAgo="3h ago"
        business="GreenTech Solutions reached 500 endorsements"
      />
      <FeedRow
        type="cta"
        name="Local"
        action=""
        timeAgo=""
        business="Artisan Bakery"
        showButtons={true}
        count={12}
      />
      <FeedRow
        type="endorsed"
        name="Jordan Lee"
        action="endorsed"
        timeAgo="5h ago"
        business="Urban Farm Co. launched beta program"
        count={32}
      />
      <FeedRow
        type="payout"
        name="Taylor Kim"
        action="payout available"
        timeAgo="1d ago"
        business="Early endorser reward unlocked"
      />
      <FeedRow
        type="invested"
        name="Casey Martinez"
        action="invested"
        timeAgo="2d ago"
        business="TechStart Inc. closed seed round"
      />
      <FeedRow
        type="cta"
        name="Local"
        action=""
        timeAgo=""
        business="Craft Brewery"
        showButtons={true}
        count={8}
      />
    </div>
  );
}

