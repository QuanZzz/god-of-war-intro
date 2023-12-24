export default function Intro() {
  return (
    <div class="main-section px-4 h-screen w-full flex flex-col items-center">
      <div
        className="w-full flex flex-col items-center pt-6  
lg:flex-row-reverse lg:justify-between lg:max-w-4xl"
      >
        <div className="w-full max-w-sm lg:w-1/2 xl:max-w-[30rem]">
          <img
            src="images/banner.jpeg"
            alt="God of War banner"
            className="rounded-md mx-auto w-full max-w-sm"
          />
        </div>

        <div className="flex flex-col pt-4 px-6 text-white lg:pr-6 lg:w-1/2">
          <h1 className="font-bold text-lg tracking-wide text-center">
            INTRODUCTION
          </h1>
          <p className="leading-tight break-words text-left">
            Starting with the release of God of War in 2005 on PlayStation 2,
            Santa Monica Studio has created seven games across multiple
            platforms up to the most recent release in 2018. Now comes the
            sequel to the critically acclaimed God of War (2018), God of War
            Ragnarök. Join Kratos and Atreus on a mythic journey for answers
            before Ragnarök arrives. Together, father and son must put
            everything on the line as they journey to each of the Nine Realms.
            Throughout stunning mythological landscapes, they'll face fearsome
            enemies - from Norse gods to wild beasts - as they prepare for the
            showdown of their lives. Armed with his trusty weapons of war -
            including the Leviathan Axe and the Blades of Chaos - Kratos' deadly
            skills will be tested like never before as he fights to protect his
            family. A host of new abilities for him and Atreus also await,
            leaving room for fluid, expressive and customizable combat in this
            ep epic and unflinching tale.
          </p>
        </div>
      </div>
    </div>
  );
}
