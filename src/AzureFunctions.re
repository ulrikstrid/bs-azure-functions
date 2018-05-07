module Context = {
  type t;
  [@bs.send] external log : (t, 'a) => unit = "";
  [@bs.send] external _done : (t, unit) => unit = "done";
  [@bs.set] external setResponse : (t, 'a) => unit = "res";
};