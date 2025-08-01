// META: title=test WebNN API reduction operations
// META: global=window
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#dom-mlgraphbuilder-reducemin
// Reduce the input tensor along all dimensions, or along the axes specified in
// the axes array parameter.
//
// dictionary MLReduceOptions {
//   sequence<[EnforceRange] unsigned long> axes;
//   boolean keepDimensions = false;
// };
//
// MLOperand reduceMin(MLOperand input, optional MLReduceOptions options = {});

const reduceMinTests = [
  {
    'name': 'reduceMin float32 0D constant tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [-58.76195526123047],
          'descriptor': {shape: [], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -58.76195526123047,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 0D constant tensor empty axes',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [-58.76195526123047],
          'descriptor': {shape: [], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}, {'options': {'axes': []}}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -58.76195526123047,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 1D constant tensor empty axes',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [-58.76195526123047, 58.76195526123047],
          'descriptor': {shape: [2], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}, {'options': {'axes': []}}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [-58.76195526123047, 58.76195526123047],
          'descriptor': {shape: [2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 1D constant tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -87.9623031616211,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 1D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -87.9623031616211,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 2D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -87.9623031616211,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 3D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -87.9623031616211,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 4D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -87.9623031616211,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 5D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -87.9623031616211,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 3D tensor options.axes',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}, {'options': {'axes': [2]}}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [
            -87.9623031616211, -39.50931167602539, -53.747413635253906,
            -31.713542938232422, -84.4076919555664, -55.97655487060547
          ],
          'descriptor': {shape: [2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 4D tensor options.axes',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments':
            [{'input': 'reduceMinInput'}, {'options': {'axes': [0, 2]}}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [
            -58.76195526123047, -87.9623031616211, -70.13690185546875,
            -59.40851974487305, -84.4076919555664, -53.747413635253906
          ],
          'descriptor': {shape: [2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 3D tensor options.keepDimensions=false',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'}, {'options': {'keepDimensions': false}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -87.9623031616211,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 3D tensor options.keepDimensions=true',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'}, {'options': {'keepDimensions': true}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [-87.9623031616211],
          'descriptor': {shape: [1, 1, 1], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 4D tensor options.keepDimensions=false',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'}, {'options': {'keepDimensions': false}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': -87.9623031616211,
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float32 4D tensor options.keepDimensions=true',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'}, {'options': {'keepDimensions': true}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [-87.9623031616211],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'reduceMin float32 4D tensor options.axes with options.keepDimensions=false',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'},
          {'options': {'axes': [1, 3], 'keepDimensions': false}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [
            -87.9623031616211, -53.747413635253906, -84.4076919555664,
            -55.97655487060547
          ],
          'descriptor': {shape: [2, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name':
        'reduceMin float32 4D tensor options.axes with options.keepDimensions=true',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.76195526123047,  -87.9623031616211,  -70.13690185546875,
            -53.61766815185547,  -39.50931167602539, 76.48815155029297,
            -18.705087661743164, 44.78261947631836,  30.70233917236328,
            61.46361541748047,   77.84043884277344,  -53.747413635253906,
            -31.713542938232422, -9.735438346862793, 77.9365234375,
            99.01705932617188,   73.39929962158203,  92.0845947265625,
            -59.40851974487305,  -84.4076919555664,  75.88834381103516,
            96.02651977539062,   -55.97655487060547, -1.7911018133163452
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'},
          {'options': {'axes': [1, 3], 'keepDimensions': true}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [
            -87.9623031616211, -53.747413635253906, -84.4076919555664,
            -55.97655487060547
          ],
          'descriptor': {shape: [2, 1, 2, 1], dataType: 'float32'}
        }
      }
    }
  },

  // float16 tests
  {
    'name': 'reduceMin float16 0D constant tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [-58.75],
          'descriptor': {shape: [], dataType: 'float16'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-58.75], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 0D constant tensor empty axes',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [-58.75],
          'descriptor': {shape: [], dataType: 'float16'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}, {'options': {'axes': []}}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-58.75], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 1D constant tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [24], dataType: 'float16'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-87.9375], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 1D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-87.9375], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 2D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-87.9375], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 3D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-87.9375], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 4D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-87.9375], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 5D tensor default options',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-87.9375], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 3D tensor options.axes',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [{'input': 'reduceMinInput'}, {'options': {'axes': [2]}}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [-87.9375, -39.5, -53.75, -31.71875, -84.4375, -55.96875],
          'descriptor': {shape: [2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float16 4D tensor options.axes',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments':
            [{'input': 'reduceMinInput'}, {'options': {'axes': [0, 2]}}],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [-58.75, -87.9375, -70.125, -59.40625, -84.4375, -53.75],
          'descriptor': {shape: [2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float16 3D tensor options.keepDimensions=false',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'}, {'options': {'keepDimensions': false}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-87.9375], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 3D tensor options.keepDimensions=true',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'}, {'options': {'keepDimensions': true}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [-87.9375],
          'descriptor': {shape: [1, 1, 1], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'reduceMin float16 4D tensor options.keepDimensions=false',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'}, {'options': {'keepDimensions': false}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput':
            {'data': [-87.9375], 'descriptor': {shape: [], dataType: 'float16'}}
      }
    }
  },
  {
    'name': 'reduceMin float16 4D tensor options.keepDimensions=true',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'}, {'options': {'keepDimensions': true}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [-87.9375],
          'descriptor': {shape: [1, 1, 1, 1], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name':
        'reduceMin float16 4D tensor options.axes with options.keepDimensions=false',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'},
          {'options': {'axes': [1, 3], 'keepDimensions': false}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [-87.9375, -53.75, -84.4375, -55.96875],
          'descriptor': {shape: [2, 2], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name':
        'reduceMin float16 4D tensor options.axes with options.keepDimensions=true',
    'graph': {
      'inputs': {
        'reduceMinInput': {
          'data': [
            -58.75,  -87.9375,   -70.125,   -53.625,     -39.5,
            76.5,    -18.703125, 44.78125,  30.703125,   61.46875,
            77.8125, -53.75,     -31.71875, -9.734375,   77.9375,
            99,      73.375,     92.0625,   -59.40625,   -84.4375,
            75.875,  96,         -55.96875, -1.791015625
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'reduceMin',
        'arguments': [
          {'input': 'reduceMinInput'},
          {'options': {'axes': [1, 3], 'keepDimensions': true}}
        ],
        'outputs': 'reduceMinOutput'
      }],
      'expectedOutputs': {
        'reduceMinOutput': {
          'data': [-87.9375, -53.75, -84.4375, -55.96875],
          'descriptor': {shape: [2, 1, 2, 1], dataType: 'float16'}
        }
      }
    }
  }
];

if (navigator.ml) {
  reduceMinTests.filter(isTargetTest).forEach((test) => {
    webnn_conformance_test(buildAndExecuteGraph, getPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
