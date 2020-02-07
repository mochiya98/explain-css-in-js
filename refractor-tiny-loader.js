"use strict";

var refractor = require("refractor/core.js");

module.exports = refractor;

refractor.register(require("refractor/lang/jsx.js"));
/*
refractor.register(require('refractor/lang/abap.js'))
refractor.register(require('refractor/lang/abnf.js'))
refractor.register(require('refractor/lang/actionscript.js'))
refractor.register(require('refractor/lang/ada.js'))
refractor.register(require('refractor/lang/apacheconf.js'))
refractor.register(require('refractor/lang/apl.js'))
refractor.register(require('refractor/lang/applescript.js'))
refractor.register(require('refractor/lang/arduino.js'))
refractor.register(require('refractor/lang/arff.js'))
refractor.register(require('refractor/lang/asciidoc.js'))
refractor.register(require('refractor/lang/asm6502.js'))
refractor.register(require('refractor/lang/aspnet.js'))
refractor.register(require('refractor/lang/autohotkey.js'))
refractor.register(require('refractor/lang/autoit.js'))
refractor.register(require('refractor/lang/bash.js'))
refractor.register(require('refractor/lang/basic.js'))
refractor.register(require('refractor/lang/batch.js'))
refractor.register(require('refractor/lang/bison.js'))
refractor.register(require('refractor/lang/bnf.js'))
refractor.register(require('refractor/lang/brainfuck.js'))
refractor.register(require('refractor/lang/bro.js'))
refractor.register(require('refractor/lang/c.js'))
refractor.register(require('refractor/lang/cil.js'))
refractor.register(require('refractor/lang/clojure.js'))
refractor.register(require('refractor/lang/cmake.js'))
refractor.register(require('refractor/lang/coffeescript.js'))
refractor.register(require('refractor/lang/cpp.js'))
refractor.register(require('refractor/lang/crystal.js'))
refractor.register(require('refractor/lang/csharp.js'))
refractor.register(require('refractor/lang/csp.js'))
refractor.register(require('refractor/lang/css-extras.js'))
refractor.register(require('refractor/lang/d.js'))
refractor.register(require('refractor/lang/dart.js'))
refractor.register(require('refractor/lang/diff.js'))
refractor.register(require('refractor/lang/django.js'))
refractor.register(require('refractor/lang/dns-zone-file.js'))
refractor.register(require('refractor/lang/docker.js'))
refractor.register(require('refractor/lang/ebnf.js'))
refractor.register(require('refractor/lang/eiffel.js'))
refractor.register(require('refractor/lang/ejs.js'))
refractor.register(require('refractor/lang/elixir.js'))
refractor.register(require('refractor/lang/elm.js'))
refractor.register(require('refractor/lang/erb.js'))
refractor.register(require('refractor/lang/erlang.js'))
refractor.register(require('refractor/lang/flow.js'))
refractor.register(require('refractor/lang/fortran.js'))
refractor.register(require('refractor/lang/fsharp.js'))
refractor.register(require('refractor/lang/gcode.js'))
refractor.register(require('refractor/lang/gedcom.js'))
refractor.register(require('refractor/lang/gherkin.js'))
refractor.register(require('refractor/lang/git.js'))
refractor.register(require('refractor/lang/glsl.js'))
refractor.register(require('refractor/lang/gml.js'))
refractor.register(require('refractor/lang/go.js'))
refractor.register(require('refractor/lang/graphql.js'))
refractor.register(require('refractor/lang/groovy.js'))
refractor.register(require('refractor/lang/haml.js'))
refractor.register(require('refractor/lang/handlebars.js'))
refractor.register(require('refractor/lang/haskell.js'))
refractor.register(require('refractor/lang/haxe.js'))
refractor.register(require('refractor/lang/hcl.js'))
refractor.register(require('refractor/lang/hpkp.js'))
refractor.register(require('refractor/lang/hsts.js'))
refractor.register(require('refractor/lang/http.js'))
refractor.register(require('refractor/lang/ichigojam.js'))
refractor.register(require('refractor/lang/icon.js'))
refractor.register(require('refractor/lang/inform7.js'))
refractor.register(require('refractor/lang/ini.js'))
refractor.register(require('refractor/lang/io.js'))
refractor.register(require('refractor/lang/j.js'))
refractor.register(require('refractor/lang/java.js'))
refractor.register(require('refractor/lang/javadoc.js'))
refractor.register(require('refractor/lang/javadoclike.js'))
refractor.register(require('refractor/lang/javastacktrace.js'))
refractor.register(require('refractor/lang/jolie.js'))
refractor.register(require('refractor/lang/jq.js'))
refractor.register(require('refractor/lang/js-extras.js'))
refractor.register(require('refractor/lang/js-templates.js'))
refractor.register(require('refractor/lang/jsdoc.js'))
refractor.register(require('refractor/lang/json.js'))
refractor.register(require('refractor/lang/json5.js'))
refractor.register(require('refractor/lang/jsonp.js'))
refractor.register(require('refractor/lang/julia.js'))
refractor.register(require('refractor/lang/keyman.js'))
refractor.register(require('refractor/lang/kotlin.js'))
refractor.register(require('refractor/lang/latex.js'))
refractor.register(require('refractor/lang/less.js'))
refractor.register(require('refractor/lang/lilypond.js'))
refractor.register(require('refractor/lang/liquid.js'))
refractor.register(require('refractor/lang/lisp.js'))
refractor.register(require('refractor/lang/livescript.js'))
refractor.register(require('refractor/lang/lolcode.js'))
refractor.register(require('refractor/lang/lua.js'))
refractor.register(require('refractor/lang/makefile.js'))
refractor.register(require('refractor/lang/markdown.js'))
refractor.register(require('refractor/lang/markup-templating.js'))
refractor.register(require('refractor/lang/matlab.js'))
refractor.register(require('refractor/lang/mel.js'))
refractor.register(require('refractor/lang/mizar.js'))
refractor.register(require('refractor/lang/monkey.js'))
refractor.register(require('refractor/lang/n1ql.js'))
refractor.register(require('refractor/lang/n4js.js'))
refractor.register(require('refractor/lang/nand2tetris-hdl.js'))
refractor.register(require('refractor/lang/nasm.js'))
refractor.register(require('refractor/lang/nginx.js'))
refractor.register(require('refractor/lang/nim.js'))
refractor.register(require('refractor/lang/nix.js'))
refractor.register(require('refractor/lang/nsis.js'))
refractor.register(require('refractor/lang/objectivec.js'))
refractor.register(require('refractor/lang/ocaml.js'))
refractor.register(require('refractor/lang/opencl.js'))
refractor.register(require('refractor/lang/oz.js'))
refractor.register(require('refractor/lang/parigp.js'))
refractor.register(require('refractor/lang/parser.js'))
refractor.register(require('refractor/lang/pascal.js'))
refractor.register(require('refractor/lang/pascaligo.js'))
refractor.register(require('refractor/lang/pcaxis.js'))
refractor.register(require('refractor/lang/perl.js'))
refractor.register(require('refractor/lang/php-extras.js'))
refractor.register(require('refractor/lang/php.js'))
refractor.register(require('refractor/lang/phpdoc.js'))
refractor.register(require('refractor/lang/plsql.js'))
refractor.register(require('refractor/lang/powershell.js'))
refractor.register(require('refractor/lang/processing.js'))
refractor.register(require('refractor/lang/prolog.js'))
refractor.register(require('refractor/lang/properties.js'))
refractor.register(require('refractor/lang/protobuf.js'))
refractor.register(require('refractor/lang/pug.js'))
refractor.register(require('refractor/lang/puppet.js'))
refractor.register(require('refractor/lang/pure.js'))
refractor.register(require('refractor/lang/python.js'))
refractor.register(require('refractor/lang/q.js'))
refractor.register(require('refractor/lang/qore.js'))
refractor.register(require('refractor/lang/r.js'))
refractor.register(require('refractor/lang/reason.js'))
refractor.register(require('refractor/lang/regex.js'))
refractor.register(require('refractor/lang/renpy.js'))
refractor.register(require('refractor/lang/rest.js'))
refractor.register(require('refractor/lang/rip.js'))
refractor.register(require('refractor/lang/roboconf.js'))
refractor.register(require('refractor/lang/ruby.js'))
refractor.register(require('refractor/lang/rust.js'))
refractor.register(require('refractor/lang/sas.js'))
refractor.register(require('refractor/lang/sass.js'))
refractor.register(require('refractor/lang/scala.js'))
refractor.register(require('refractor/lang/scheme.js'))
refractor.register(require('refractor/lang/scss.js'))
refractor.register(require('refractor/lang/shell-session.js'))
refractor.register(require('refractor/lang/smalltalk.js'))
refractor.register(require('refractor/lang/smarty.js'))
refractor.register(require('refractor/lang/soy.js'))
refractor.register(require('refractor/lang/splunk-spl.js'))
refractor.register(require('refractor/lang/sql.js'))
refractor.register(require('refractor/lang/stylus.js'))
refractor.register(require('refractor/lang/swift.js'))
refractor.register(require('refractor/lang/t4-cs.js'))
refractor.register(require('refractor/lang/t4-templating.js'))
refractor.register(require('refractor/lang/t4-vb.js'))
refractor.register(require('refractor/lang/tap.js'))
refractor.register(require('refractor/lang/tcl.js'))
refractor.register(require('refractor/lang/textile.js'))
refractor.register(require('refractor/lang/toml.js'))
refractor.register(require('refractor/lang/tsx.js'))
refractor.register(require('refractor/lang/tt2.js'))
refractor.register(require('refractor/lang/twig.js'))
refractor.register(require('refractor/lang/typescript.js'))
refractor.register(require('refractor/lang/vala.js'))
refractor.register(require('refractor/lang/vbnet.js'))
refractor.register(require('refractor/lang/velocity.js'))
refractor.register(require('refractor/lang/verilog.js'))
refractor.register(require('refractor/lang/vhdl.js'))
refractor.register(require('refractor/lang/vim.js'))
refractor.register(require('refractor/lang/visual-basic.js'))
refractor.register(require('refractor/lang/wasm.js'))
refractor.register(require('refractor/lang/wiki.js'))
refractor.register(require('refractor/lang/xeora.js'))
refractor.register(require('refractor/lang/xojo.js'))
refractor.register(require('refractor/lang/xquery.js'))
refractor.register(require('refractor/lang/yaml.js'))
*/
