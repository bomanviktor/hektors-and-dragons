import { BUTTON_COLOR, BUTTON_HOVER_COLOR } from "@/app/constants";

const LoreScreen = ({ handler }: { handler: () => void }) => {
  return (
    <div className="flex flex-col text-white  text-lg px-3">
      <hr className="mb-3" />
      <div className="flex justify-between">
        <div className="md:w-1/2 mr-10">
          <div className="mb-5">
            <p>In the realm of Merger, where Muron stands tall,</p>
            <p>A wall of mystery, dividing one and all.</p>
            <p>Crafted by ancient hands, its purpose unknown,</p>
            <p>Its secrets buried deep, to mortals never shown.</p>
          </div>
          <div className="mb-5">
            <p>No living soul has breached its imposing might,</p>
            <p>Luma and Void, forever kept from sight.</p>
            <p>Beyond its barrier, hidden truths do lie,</p>
            <p>Taunting those who seek, beneath the endless sky.</p>
          </div>
          <div className="mb-5">
            <p>Luma, bathed in light, a realm serene,</p>
            <p>Yet unease lingers, in shadows unseen.</p>
            <p>Cities, villages, a tapestry vast,</p>
            <p>But fear and paranoia, forever cast.</p>
          </div>
          <div className="mb-5">
            <p>Desperate souls have sought to ascend,</p>
            <p>Muron's towering heights, a journey to amend.</p>
            <p>Yet tragic fates awaited those who dared,</p>
            <p>Their dreams dashed, their hopes ensnared.</p>
          </div>
          <div className="mb-5">
            <p>Atop the wall, a sight of dread,</p>
            <p>A land shrouded in mist, the living dead.</p>
            <p>Desolate and scorched, a realm forlorn,</p>
            <p>The price of curiosity, forever sworn.</p>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="mb-5">
            <p>Within this world, our adventurers tread,</p>
            <p>Fate's tangled web, their destinies led.</p>
            <p>Driven by desire, redemption, and more,</p>
            <p>They venture forth, to distant shores.</p>
          </div>
          <div className="mb-5">
            <p>Each step they take, echoes through time,</p>
            <p>Unraveling secrets, a rhythm sublime.</p>
            <p>Cloaked in danger, in ruins they roam,</p>
            <p>Their journey fraught, yet they press on.</p>
          </div>
          <div className="mb-5">
            <p>For beyond Muron's unyielding might,</p>
            <p>Lies the truth, hidden from sight.</p>
            <p>But peril awaits, and dangers untold,</p>
            <p>Their courage tested, their spirits bold.</p>
          </div>
          <div className="mb-5">
            <p>Together they stand, against the unknown,</p>
            <p>Their strength united, their hearts full-blown.</p>
            <p>For the fate of Merger, in their hands does rest,</p>
            <p>And the answers they seek, put to the test.</p>
          </div>
        </div>
      </div>
      <hr />
      <button
        className={`${BUTTON_COLOR} ${BUTTON_HOVER_COLOR} self-center w-1/2 p-3 mt-5 rounded-xl text-white transition cursor-pointer`}
        onClick={() => {
          handler();
        }}
      >
        Play Game
      </button>
    </div>
  );
};

export default LoreScreen;
