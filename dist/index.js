"use strict";

exports["default"] = analyze;
/**
 * Copyright 2014 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// FIXME: the code generated by 6to5 should not have to require ES6 shims.
if (typeof Map === "undefined") require("es6-map/implement");
if (typeof Symbol === "undefined") require("es6-symbol/implement");

var ScopeAnalyzer = require("./scope-analyzer")["default"];

exports.ScopeType = require("./scope").ScopeType;
exports.DeclarationType = require("./declaration").DeclarationType;
exports.Accessibility = require("./reference").Accessibility;

function analyze(script) {
  return ScopeAnalyzer.analyze(script);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztxQkE0QndCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVYvQixJQUFJLE9BQU8sR0FBRyxLQUFLLFdBQVcsRUFDNUIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDL0IsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQy9CLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztJQUUzQixhQUFhLFdBQU0sa0JBQWtCOztRQUNwQyxTQUFTLFdBQU8sU0FBUyxFQUF6QixTQUFTO1FBQ1QsZUFBZSxXQUFPLGVBQWUsRUFBckMsZUFBZTtRQUNmLGFBQWEsV0FBTyxhQUFhLEVBQWpDLGFBQWE7O0FBRU4sU0FBUyxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ3RDLFNBQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUN0QyIsImZpbGUiOiJzcmMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAyMDE0IFNoYXBlIFNlY3VyaXR5LCBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKVxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXG4vLyBGSVhNRTogdGhlIGNvZGUgZ2VuZXJhdGVkIGJ5IDZ0bzUgc2hvdWxkIG5vdCBoYXZlIHRvIHJlcXVpcmUgRVM2IHNoaW1zLlxuaWYgKHR5cGVvZiBNYXAgPT09IFwidW5kZWZpbmVkXCIpXG4gIHJlcXVpcmUoJ2VzNi1tYXAvaW1wbGVtZW50Jyk7XG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIilcbiAgcmVxdWlyZSgnZXM2LXN5bWJvbC9pbXBsZW1lbnQnKTtcblxuaW1wb3J0IFNjb3BlQW5hbHl6ZXIgZnJvbSBcIi4vc2NvcGUtYW5hbHl6ZXJcIjtcbmV4cG9ydCB7U2NvcGVUeXBlfSBmcm9tIFwiLi9zY29wZVwiO1xuZXhwb3J0IHtEZWNsYXJhdGlvblR5cGV9IGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5leHBvcnQge0FjY2Vzc2liaWxpdHl9IGZyb20gXCIuL3JlZmVyZW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhbmFseXplKHNjcmlwdCkge1xuICByZXR1cm4gU2NvcGVBbmFseXplci5hbmFseXplKHNjcmlwdCk7XG59XG4iXX0=