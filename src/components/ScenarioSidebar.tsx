import React from 'react';

type Props = {};

const ScenarioSidebar = (props: Props) => {

  return (
    <aside className="scenario-sidebar">
      <h1>Steering Behaviours!</h1>
      <fieldset>
      <label htmlFor="pick-scenario">Pick a scenario</label>
      <select id="pick-scenario">
        <option>TODO</option>
      </select>
      <span>The <em>align behaviour</em> makes a character rotate to match the orientation of another character.</span>
      </fieldset>

      <button>Start</button>
      <button>Restart</button>
    </aside>
  );

};

export default ScenarioSidebar;
