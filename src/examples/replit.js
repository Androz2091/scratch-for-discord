export default `

<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="s4d_login" id="Z:S+o8L([8EYVpTq6F/B" x="238" y="203">
    <value name="TOKEN">
      <shadow type="text" id="sqoaQE/q4]L-eJxRSc4O">
        <field name="TEXT">Please read all the comments "?"</field>
      </shadow>
    </value>
  </block>
  <block type="s4d_on_connected" id="[?^fN7Ur{F8X=x/D_gpv" x="242" y="359">
    <comment pinned="false" h="80" w="160">Running many repls in 1 server repl (better choice  and efficient)</comment>
    <statement name="STATEMENTS">
      <block type="server_file" id="j~19e}H3+k*B|A=/SjNz">
        <next>
          <block type="s4d_forever" id="V{)|I8MG|(IwRlHxc-:-">
            <statement name="STATEMENT">
              <block type="s4d_wait_seconds" id="z~Tw8_^;+?Thq]FCFE}T">
                <comment pinned="false" h="80" w="160">Atleast 60 seconds delay u may decrease the amount for more reliability</comment>
                <value name="TIME">
                  <shadow type="math_number" id="H~g@$/o|\`G5d9:-H4xxm">
                    <field name="NUM">5</field>
                  </shadow>
                </value>
                <next>
                  <block type="jg_imghttps" id="gU75g+DmMwAR,(ZI(j.Q">
                    <value name="url">
                      <block type="text" id="ebqF5d[?9W+b^dA8u]78">
                        <field name="TEXT">Server repl webview link</field>
                      </block>
                    </value>
                    <value name="file">
                      <block type="text" id="(O]g.lh_{C(tQj==INI0">
                        <field name="TEXT">repl.txt</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="s4d_forever" id="^8mh:Ps}qx;VWcQkPk:f">
                <statement name="STATEMENT">
                  <block type="s4d_wait_seconds" id=".8\`jzz[Q0);CFKxkG#%/">
                    <comment pinned="false" h="80" w="160">Atleast 60 seconds delay u may decrease the amount for more reliability</comment>
                    <value name="TIME">
                      <shadow type="math_number" id="zovlaK}xtr+YBQoJJ;wx">
                        <field name="NUM">5</field>
                      </shadow>
                    </value>
                    <next>
                      <block type="jg_imghttps" id="xAIe:fxh=y7$apqQ[4M9">
                        <value name="url">
                          <block type="text" id="2$|\`9QBBjSM4p/O*28R*">
                            <field name="TEXT">repl 1 webview link</field>
                          </block>
                        </value>
                        <value name="file">
                          <block type="text" id="aP6v_02nBW_sqp/WhHV0">
                            <field name="TEXT">repl.txt</field>
                          </block>
                        </value>
                      </block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="s4d_forever" id="xzy!GWZ9/[9eTI{wzdOU">
                    <statement name="STATEMENT">
                      <block type="s4d_wait_seconds" id="Genc$C(\`L*aYzYZD_.mr">
                        <comment pinned="false" h="80" w="160">Atleast 60 seconds delay u may decrease the amount for more reliability</comment>
                        <value name="TIME">
                          <shadow type="math_number" id="LNLL}s37l24*|joP-1c%">
                            <field name="NUM">5</field>
                          </shadow>
                        </value>
                        <next>
                          <block type="jg_imghttps" id="xb4a3hg6vz!Cv]Ge_q5g">
                            <value name="url">
                              <block type="text" id="M|7!dbY%@]XHJU?^iW3)">
                                <field name="TEXT">repl 2 webview link</field>
                              </block>
                            </value>
                            <value name="file">
                              <block type="text" id="-zEML$d5uQb%y1bn}q+W">
                                <field name="TEXT">repl.txt</field>
                              </block>
                            </value>
                          </block>
                        </next>
                      </block>
                    </statement>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="s4d_on_connected" id="S#fjV~C]Ek7@C,?j0.e9" x="822" y="389">
    <comment pinned="false" h="80" w="160">Running a repl 24/7 by itself</comment>
    <statement name="STATEMENTS">
      <block type="server_file" id="b%|$~%j;gEjttV~Or%Bo">
        <next>
          <block type="s4d_forever2" id="0.Az2qOaPQA^c@5mr;1l">
            <statement name="STATEMENT">
              <block type="s4d_wait_seconds" id=".?eeC%ss9y\`;Yt%Qdi7o">
                <comment pinned="false" h="80" w="160">Atleast 60 seconds delay u may decrease the amount for more reliability</comment>
                <value name="TIME">
                  <shadow type="math_number" id="u/EzY2nCcqdJM}yOAmDe">
                    <field name="NUM">5</field>
                  </shadow>
                </value>
                <next>
                  <block type="jg_imghttps" id="Mja8|Epw3*|{Kz;6$9%;">
                    <comment pinned="false" h="80" w="160">change the ink to your repl webview link</comment>
                    <value name="url">
                      <block type="text" id="6CYi5VV@(3!:O$dQ~;Lx">
                        <field name="TEXT">https://azone.aumous.repl.co</field>
                      </block>
                    </value>
                    <value name="file">
                      <block type="text" id="kagfN/;6+MO8\`vigvS%L">
                        <field name="TEXT">repl.txt</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <value name="LOG">
              <shadow type="logic_boolean" id="W^Iz:d\`dYYhQz|,s0tsP">
                <field name="BOOL">FALSE</field>
              </shadow>
            </value>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>
`;