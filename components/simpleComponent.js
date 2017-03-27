var noflo = require('noflo');

exports.getComponent = function() {
  var c = new noflo.Component();
  c.description = 'Forwards packets and metadata in the same way it receives them';
  c.icon = 'forward';
  c.inPorts.add('in', {
    datatype: 'string',
    description: 'Packet to forward'
  });
  c.outPorts.add('out', {
    datatype: 'string'
  });
   c.process(function (input, output) {
    // Precondition: check that the "in" port has a data packet.
    // Not necessary for single-inport components but added here
    // for the sake of demonstration
   // if (!input.hasData('in')) {
     // return;
    //}
    console.log("working ...");
  });  
  return c;
};
