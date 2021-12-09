export default `
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="s4d_login" id="+X4MpZayvtt7cjQdJbn6" x="265" y="100">
    <value name="TOKEN">
      <block type="text" id="=OnTyQ/sYsGK?yVwL(]k">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="ticket_connect" id="tdkd}QaH1$90-h0q\`#[0" x="262" y="190">
    <value name="URL">
      <block type="text" id="%{dgTz9Nyo2L=ak6SAf4">
        <field name="TEXT">Mongodb URI here or type local</field>
      </block>
    </value>
  </block>
  <block type="s4d_on_message" id="bt[F8^;aOE7GU?5$a)?w" x="262" y="266">
    <statement name="STATEMENTS">
      <block type="controls_if" id="y[Zd4^IR3GK!s?44|!~X">
        <comment pinned="false" h="80" w="160">This will set your ticket channel to mentioned channel</comment>
        <value name="IF0">
          <block type="s4d_starts_with" id="2G5n|2auP|5Yf\`O:d2WQ">
            <value name="STRING">
              <shadow type="text" id="%7xut+8PnbWP#Pl%W5b9">
                <field name="TEXT">abc</field>
              </shadow>
              <block type="s4d_message_content" id="^=WIpv_,R6^HwC3dx|9Q"></block>
            </value>
            <value name="SUBSTRING">
              <shadow type="text" id="e#!fvp_D+yKP+-rdlh+L">
                <field name="TEXT">!ticket</field>
              </shadow>
            </value>
          </block>
        </value>
        <statement name="DO0">
          <block type="s4d_try_and_catch" id="0ks@]Hu/j7Api;h46E^q">
            <statement name="try">
              <block type="ticket_setup" id="1O(xq,Qa9*)5@pU}vLuc">
                <next>
                  <block type="s4d_reply" id="L:)RsJnX;\`P7*ZAkGi1{">
                    <value name="CONTENT">
                      <shadow type="text" id="r01@NRfXm{ZMCR$9-*XM">
                        <field name="TEXT"></field>
                      </shadow>
                      <block type="text_join" id="1FR!af{Nk;$QG_stV]8e">
                        <mutation items="4"></mutation>
                        <value name="ADD0">
                          <block type="text" id="!Bw+#YB+5v!$A8H(W[_R">
                            <field name="TEXT">I have set the ticket channel to </field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="text" id=".nOMw^hI$n5t.0QPy1(L">
                            <field name="TEXT">&lt;#</field>
                          </block>
                        </value>
                        <value name="ADD2">
                          <block type="s4d_mentioned_channel" id="-BtOp3iN:?9q_i|Yo9i3"></block>
                        </value>
                        <value name="ADD3">
                          <block type="text" id="Ir4(LeW_6~Gt%xHUuJqZ">
                            <field name="TEXT">&gt;</field>
                          </block>
                        </value>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <statement name="catch">
              <block type="s4d_reply" id="p-%]v*]\`QLgQ-J}|Pk$K">
                <value name="CONTENT">
                  <shadow type="text" id="pfZh_Hg]u8rj/i_X.ELo">
                    <field name="TEXT">U need to mention a channel!</field>
                  </shadow>
                </value>
              </block>
            </statement>
          </block>
        </statement>
        <next>
          <block type="controls_if" id="?mr%Ub*ms2Yp+]3T+qfd">
            <value name="IF0">
              <block type="s4d_starts_with" id="ctqsn|fbW-jw#E(IZdVZ">
                <value name="STRING">
                  <shadow type="text">
                    <field name="TEXT">abc</field>
                  </shadow>
                  <block type="s4d_message_content" id="rB_li[eh]u.9tu,VY);{"></block>
                </value>
                <value name="SUBSTRING">
                  <shadow type="text" id="#4om-]$S|p[mQ3JiK=Ws">
                    <field name="TEXT">!close</field>
                  </shadow>
                </value>
              </block>
            </value>
            <statement name="DO0">
              <block type="close_ticket" id="W[~-[a^vvknhCzQys7kb">
                <next>
                  <block type="s4d_reply" id="0]J:hj-UMM\`ZMA;_wY7T">
                    <value name="CONTENT">
                      <shadow type="text" id="PV3cX()t%o7pjPgqj7So">
                        <field name="TEXT">Closed the ticket</field>
                      </shadow>
                    </value>
                  </block>
                </next>
              </block>
            </statement>
            <next>
              <block type="controls_if" id="Ofy*%,F*0JFl_:{BI({7">
                <value name="IF0">
                  <block type="s4d_starts_with" id="WZgYgk(DYiCxFgNpOW:T">
                    <value name="STRING">
                      <shadow type="text">
                        <field name="TEXT">abc</field>
                      </shadow>
                      <block type="s4d_message_content" id="gp.~ymuL0s(nR1Hx$\`$u"></block>
                    </value>
                    <value name="SUBSTRING">
                      <shadow type="text" id="0n$S=n3X=V0X\`sC5,5o\`">
                        <field name="TEXT">!archive</field>
                      </shadow>
                    </value>
                  </block>
                </value>
                <statement name="DO0">
                  <block type="s4d_reply" id="pd:A/9P#A%3)^7{d%pL}">
                    <value name="CONTENT">
                      <shadow type="text" id=",XjDz-hEJY2MWocvgb.$">
                        <field name="TEXT">Archived the ticket</field>
                      </shadow>
                    </value>
                    <next>
                      <block type="archieve_ticket" id="m83(3{!K^{9%H,UQLVO5"></block>
                    </next>
                  </block>
                </statement>
                <next>
                  <block type="controls_if" id="eUSuB)~\`4yb|0(4Wt.hh">
                    <value name="IF0">
                      <block type="s4d_starts_with" id=".?xl*AT#1?}+S-{=\`aTL">
                        <value name="STRING">
                          <shadow type="text">
                            <field name="TEXT">abc</field>
                          </shadow>
                          <block type="s4d_message_content" id="]38WQz9SWk%OaB]PIH~S"></block>
                        </value>
                        <value name="SUBSTRING">
                          <shadow type="text" id="uG}OnYeHs40OBytm{Axb">
                            <field name="TEXT">!unarchive</field>
                          </shadow>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="s4d_reply" id=",iAE;YZ+n^~tuocAL5Bp">
                        <value name="CONTENT">
                          <shadow type="text" id=":(18p$StLXkpo$QC~5lS">
                            <field name="TEXT">Unarchived the ticket</field>
                          </shadow>
                        </value>
                        <next>
                          <block type="unarchieve_ticket" id="2cY6\`W,%Qbc8;KvlJ~gf"></block>
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
</xml>
`;