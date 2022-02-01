import React from 'react';

type Props = {};

const Header = (props: Props) => {

  return (
    <header>
      <fieldset>
      <label htmlFor="pick-scenario">Pick a scenario</label>
      <select id="pick-scenario">
        <option>TODO</option>
      </select>
      </fieldset>

      <button>Begin</button>
      <button>Restart</button>
      <span>The <em>align behaviour</em> makes a character rotate to match the orientation of another character.</span>
    </header>
  );

};

export default Header;
