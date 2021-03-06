<% var up_prefab = prefabName.charAt(0).toUpperCase() + prefabName.slice(1); %>
'use strict';

//Documentation for Phaser's (2.6.2) text:: phaser.io/docs/2.6.2/Phaser.Text.html
<%= up_prefab %>.prototype = Object.create(Phaser.Text.prototype);

  // prefab initialization and construction
<%= up_prefab %>.prototype.constructor = function(game, x, y, text, style) {
  Phaser.Text.call(this, game, x, y, text, style);

};

  // prefab specific frame update code
<%= up_prefab %>.prototype.update = function() {

};

module.exports = <%= up_prefab %>;
