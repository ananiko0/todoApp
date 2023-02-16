import React, { Fragment } from "react";

import Task from "../components/Task/Task";

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum vehicula est, id gravida eros mattis id. Quisque efficitur turpis mi, a sollicitudin ante interdum sit amet. Curabitur purus enim, porta ac dictum non, dictum sed odio. Morbi id tellus lacinia, consequat quam eget, aliquet orci. Nunc imperdiet libero quis est semper volutpat. Quisque rhoncus, ipsum egestas iaculis viverra, orci nisl ornare enim, id gravida erat mauris quis mi. Donec facilisis rhoncus massa a lobortis. Suspendisse lacinia ullamcorper enim, eget volutpat est malesuada vel. In enim tortor, ullamcorper nec scelerisque eget, tincidunt eget urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum vehicula est, id gravida eros mattis id. Quisque efficitur turpis mi, a sollicitudin ante interdum sit amet. Curabitur purus enim, porta ac dictum non, dictum sed odio. Morbi id tellus lacinia, consequat quam eget, aliquet orci. Nunc imperdiet libero quis est semper volutpat. Quisque rhoncus, ipsum egestas iaculis viverra, orci nisl ornare enim, id gravida erat mauris quis mi. Donec facilisis rhoncus massa a lobortis. Suspendisse lacinia ullamcorper enim, eget volutpat est malesuada vel. In enim tortor, ullamcorper nec scelerisque eget, tincidunt eget urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum vehicula est, id gravida eros mattis id. Quisque efficitur turpis mi, a sollicitudin ante interdum sit amet. Curabitur purus enim, porta ac dictum non, dictum sed odio. Morbi id tellus lacinia, consequat quam eget, aliquet orci. Nunc imperdiet libero quis est semper volutpat. Quisque rhoncus, ipsum egestas iaculis viverra, orci nisl ornare enim, id gravida erat mauris quis mi. Donec facilisis rhoncus massa a lobortis. Suspendisse lacinia ullamcorper enim, eget volutpat est malesuada vel. In enim tortor, ullamcorper nec scelerisque eget, tincidunt eget urna.";

function Main(props) {
  return (
    <Fragment>
      <div style={{ backgroundColor: "white", width: "70%" }}></div>
      {/* {paragraph}
      {paragraph} */}
      <Task />
    </Fragment>
  );
}

export default Main;
