export default `
<xml xmlns="https://developers.google.com/blockly/xml">
<variables>
<variable id="vB#MF/kC-}dCBD3%UO^f">random_coin</variable>
<variable id="GO[\`,r2@whr7g@1i}sw_">coins</variable>
<variable id="7$AQky9cD-(*o+k.:OM%">coin_answer</variable>
<variable id="mebi*b=kInGRZ(gBM-6#">give_answer</variable>
</variables>
<block type="s4d_login" id="Hr}:5$Qy\`B[3=O3Kf+Et" x="0" y="0">
<value name="TOKEN">
<block type="text" id="I;}h?~968z3,y]gZGPF?">
<field name="TEXT">Your bot token</field>
</block>
</value>
</block>
<block type="s4d_on_message" id="Gum0qsrJH~jK#Y!up,EQ" x="0" y="104">
<statement name="STATEMENTS">
<block type="controls_if" id="s_g;=9*7q3!WqMw-?f2m">
<value name="IF0">
<block type="logic_negate" id="LAbWx%d?_v-8J6A8BsiU">
<value name="BOOL">
<block type="s4d_member_is_bot" id="$f:%%=oSov^nYv]G(={t">
<value name="MEMBER">
<block type="s4d_message_author" id="wPL]v;o9tPdZd|r%@GYZ"/>
</value>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="controls_if" id="YW8k,u/~d*GulG(jeA4w">
<value name="IF0">
<block type="logic_negate" id=")|0U@~d3S^#[xp!Wfb5]">
<value name="BOOL">
<block type="s4d_has_data" id="H]5.;1Q%vV1+/65bOO|j">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="XUOc2|oHCxEBroG8iyKk">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="Xzd9?=KZ{b}+rufH$6fF">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="[hMQ{TDoTvHm1~0%[(9\`">
<value name="MEMBER">
<block type="s4d_message_author" id="rYMLqPQG*^6%m2+DUqRR"/>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_set_data" id="mVhoT,Hgy)XUJ3W8oFWs">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="|HjnIJf6)7[7\`[y:q(#J">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="qg+E3QZ]N+J6eabse|o:">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="hSzXla}Yc?*MGcv^4go=">
<value name="MEMBER">
<block type="s4d_message_author" id="Vn_~Z7Xjwfr+Q?.4E$|*"/>
</value>
</block>
</value>
</block>
</value>
<value name="VALUE">
<shadow type="text">
<field name="TEXT">world</field>
</shadow>
<block type="math_number" id=",xtoWm#WXvMG1wiQ%]lS">
<field name="NUM">0</field>
</block>
</value>
</block>
</statement>
<next>
<block type="variables_set" id="H(2XnzCNaNR3SW*u\`H))">
<field name="VAR" id="vB#MF/kC-}dCBD3%UO^f">random_coin</field>
<value name="VALUE">
<block type="math_random_int" id="9#~pGLgW[bmkQuGm0v,p">
<value name="FROM">
<shadow type="math_number" id="2Q*_LuEnoHU]O0O^F~o=">
<field name="NUM">1</field>
</shadow>
</value>
<value name="TO">
<shadow type="math_number" id="Ek61gLi*8/rYW]we]@\`Y">
<field name="NUM">10</field>
</shadow>
</value>
</block>
</value>
<next>
<block type="variables_set" id="*iu[!LAD*OSvd(AJzm7n">
<field name="VAR" id="GO[\`,r2@whr7g@1i}sw_">coins</field>
<value name="VALUE">
<block type="s4d_get_data" id="eXTcDeL=~B,N{L63^rNe">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="qr#i%qX,0$eN?aaPBO4|">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="gL;_v{/WGi0vemW(QW($">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="n5{{?0?kbT#SIYJ2).jt">
<value name="MEMBER">
<block type="s4d_message_author" id="/(fO1$cO!C}w+d}i_es]"/>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
<next>
<block type="s4d_add_data" id="z9L?^2C\`R\`_ra4rI!}Q0">
<value name="COUNT">
<shadow type="math_number">
<field name="NUM">1</field>
</shadow>
<block type="variables_get" id="A=1sBl.]MqWOMx!yf=yq">
<field name="VAR" id="vB#MF/kC-}dCBD3%UO^f">random_coin</field>
</block>
</value>
<value name="KEY">
<shadow type="text">
<field name="TEXT">points</field>
</shadow>
<block type="text_join" id="xGI-YWT5SjvoC,)R#L05">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="_GkMkcvq+Y^7VSMFHVq-">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="bg)5z{V9zD$NBgrEozK#">
<value name="MEMBER">
<block type="s4d_message_author" id="BKE2aHH}r@Ia3c(YEUk3"/>
</value>
</block>
</value>
</block>
</value>
<next>
<block type="controls_if" id="Z|0^=f_3Ev\`{=ZQzc$3r">
<mutation elseif="1"/>
<value name="IF0">
<block type="logic_compare" id="!e[0qqK[B%O?w%o_lL=W">
<field name="OP">EQ</field>
<value name="A">
<block type="s4d_message_content" id="rGM;Q$($X_Px[+}TE2EZ"/>
</value>
<value name="B">
<block type="text" id="rxY{0p$@uVp{]pKHTG=V">
<field name="TEXT">$bal</field>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_create_embed_then" id="RtRfOXf:}4uN9hQga,D0">
<statement name="THEN">
<block type="s4d_create_embed_then_set_color" id="C#_$58_]q\`P;SnG|=u(\`">
<value name="COLOR">
<block type="colour_random" id="pz9Re-+YEXDOEsl.WrD4"/>
</value>
<next>
<block type="s4d_create_embed_then_set_title" id="m^h#zCfJhX,vH.(%|gv]">
<value name="TITLE">
<block type="text" id="\`Q2L!XqZc*R6QEatQGZF">
<field name="TEXT">ACCOUNT</field>
</block>
</value>
<next>
<block type="s4d_create_embed_then_set_thumbnail" id="yc=NZ#-}{_*qT^pU2R#3">
<value name="THUMBNAIL">
<block type="s4d_member_icon" id="i[WG@Q!Pi+D(%thF]caM">
<value name="MEMBER">
<block type="s4d_message_author" id="^MS[%Ad+4VQota\`bW-Fj"/>
</value>
</block>
</value>
<next>
<block type="s4d_create_embed_then_set_description" id="-t:~bP(jfd22fujYcG52">
<value name="DESCRIPTION">
<block type="text_join" id="S}X_.-K/I8@jOhIffS:l">
<mutation items="4"/>
<value name="ADD0">
<block type="s4d_message_author" id="_lNm}Y12;U7@q\`:6fmR2"/>
</value>
<value name="ADD1">
<block type="text" id="UYVY}rbv^55viN.N#yoM">
<field name="TEXT"> you currently have </field>
</block>
</value>
<value name="ADD2">
<block type="variables_get" id="{T#jZka$[gD4e[XXMUHv">
<field name="VAR" id="GO[\`,r2@whr7g@1i}sw_">coins</field>
</block>
</value>
<value name="ADD3">
<block type="text" id=".4z_8-p:|C/d8*:nK|EX">
<field name="TEXT"> coins in your account.</field>
</block>
</value>
</block>
</value>
<next>
<block type="s4d_create_embed_then_send" id="}hM5+3EtM(sj\`6r]|PU7">
<value name="CHANNEL">
<block type="s4d_message_channel" id="LnMc|LLlOs[Z*!j/~K9p"/>
</value>
</block>
</next>
</block>
</next>
</block>
</next>
</block>
</next>
</block>
</statement>
</block>
</statement>
<value name="IF1">
<block type="s4d_starts_with" id="VD{t5sB-:b6U}sPS_!x4">
<value name="STRING">
<shadow type="text">
<field name="TEXT">abc</field>
</shadow>
<block type="s4d_message_content" id="O3o4PQQUY2OfoaY}8Y!O"/>
</value>
<value name="SUBSTRING">
<shadow type="text" id="aP;)3t%VHw!?)B4N8xil">
<field name="TEXT">$bal</field>
</shadow>
</value>
</block>
</value>
<statement name="DO1">
<block type="controls_if" id="}Msqsrh5)A4Uz]kpiLYb">
<value name="IF0">
<block type="logic_negate" id=";hX=D?4[3Gl)-U(oLdMN">
<value name="BOOL">
<block type="logic_compare" id="q!lfM%hSp@s]+8Os6qKm">
<field name="OP">EQ</field>
<value name="A">
<block type="s4d_message_content" id="FGls+6tL$AALX_j0sTQB"/>
</value>
<value name="B">
<block type="text" id="JC/:5+R/J-p1O2u(5\`jv">
<field name="TEXT">$bal</field>
</block>
</value>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_try_and_catch" id="5}A@BqkM|l23A1oW~Sp1">
<statement name="try">
<block type="controls_if" id="Nel1H+C+F59AwK@6nv[x">
<value name="IF0">
<block type="logic_negate" id="H6hES*~$gQ+GZcNx_!|g">
<value name="BOOL">
<block type="s4d_has_data" id="r0:;zHB!1AgjegFze@mE">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="oL9|$hXt6x9FfuuLXsT8">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="lQquu_2A0hOl1;gZF]5T">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id=";/BiC)p(LUmKFZcxP.@*">
<value name="MEMBER">
<block type="s4d_mentioned_member" id=".iXNU7VSP4V:n::5)c~b"/>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_set_data" id="94M.l(|=yUE$yuAKmZ)B">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="Ti5\`T0vx[lmr%!\`!0l2D">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="$1,cu1GU#]A67*^KH~?,">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="@=*?AxVd.!!=NTVzbgD|">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="1SQTvy%A%46r*ApE1.);"/>
</value>
</block>
</value>
</block>
</value>
<value name="VALUE">
<shadow type="text">
<field name="TEXT">world</field>
</shadow>
<block type="math_number" id="w^dv^3!A2EY(G@Q?~i@b">
<field name="NUM">0</field>
</block>
</value>
</block>
</statement>
<next>
<block type="s4d_create_embed_then" id="%??/]io]^#UoDc$PToua">
<statement name="THEN">
<block type="s4d_create_embed_then_set_color" id="?i+lRN|z3^-nDn1f!%}*">
<value name="COLOR">
<block type="colour_random" id="@9zR.Tb~,O\`yRxg/Nz09"/>
</value>
<next>
<block type="s4d_create_embed_then_set_title" id="H/\`w9]XHZNYEr]kwOfGy">
<value name="TITLE">
<block type="text" id="TA5na=XK!|P~z_vqF6c?">
<field name="TEXT">ACCOUNT</field>
</block>
</value>
<next>
<block type="s4d_create_embed_then_set_thumbnail" id="k!(W|S]C9q5X}SEm!n3_">
<value name="THUMBNAIL">
<block type="s4d_member_icon" id="%g94+}|K@XT8KGN3Bblm">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="R/4Hp}ExN#B;uPG4$7ff"/>
</value>
</block>
</value>
<next>
<block type="s4d_create_embed_then_set_description" id="\`E]Jsf91T8sFTOmhQ]Z1">
<value name="DESCRIPTION">
<block type="text_join" id="FxTI^dk[U8%5:RJ-%K;*">
<mutation items="4"/>
<value name="ADD0">
<block type="s4d_mentioned_member" id="b(MjG(:2,o2vI4nb=Gj,"/>
</value>
<value name="ADD1">
<block type="text" id="8^AOVS}?[Uh$,$sCiTs^">
<field name="TEXT"> currently has </field>
</block>
</value>
<value name="ADD2">
<block type="s4d_get_data" id="D7rb;GDGY[)LWc4{mqRl">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="A|w/(5y-WA]z.+:!5r)e">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="ZL.w8d@#Pop)zjbu2e])">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="JJq,ad5~hw\`2AOE]]1Q/">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="yDGWh{3}i$gd#0_v@Hy7"/>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
<value name="ADD3">
<block type="text" id="Z}aKe$EWTJM2/.2Z.~*s">
<field name="TEXT"> coins in their account.</field>
</block>
</value>
</block>
</value>
<next>
<block type="s4d_create_embed_then_send" id="$2nltvR3cL:?)V%aw_tt">
<value name="CHANNEL">
<block type="s4d_message_channel" id="01$(qBiUCAso2}lNhNa7"/>
</value>
</block>
</next>
</block>
</next>
</block>
</next>
</block>
</next>
</block>
</statement>
</block>
</next>
</block>
</statement>
<statement name="catch">
<block type="s4d_reply" id="6aS|Ak8KUfw22t#SczJa">
<value name="CONTENT">
<shadow type="text" id="~}5Fl/O/DS)gMYVm$.?2">
<field name="TEXT">ping a valid member</field>
</shadow>
</value>
</block>
</statement>
</block>
</statement>
</block>
</statement>
<next>
<block type="controls_if" id=";q?NZB28s;L7*%b7aN@{">
<mutation elseif="1"/>
<value name="IF0">
<block type="s4d_starts_with" id="fN=]EYDp:S$oP.,Ni*-~">
<value name="STRING">
<shadow type="text" id="Nq5%iLrk%_c|Zd$-u,Uy">
<field name="TEXT">abc</field>
</shadow>
<block type="s4d_message_content" id="VEUxeU-4rO#En^Em/N#7"/>
</value>
<value name="SUBSTRING">
<shadow type="text" id="Y%L;Za,VZGWtA=]s^E/+">
<field name="TEXT">$editcoins</field>
</shadow>
</value>
</block>
</value>
<statement name="DO0">
<block type="controls_if" id="Y;H|hbU(qGG@x0~Zi@ZG">
<mutation else="1"/>
<value name="IF0">
<block type="s4d_member_has_permission" id="1o[kXw2^lvKf13a:vsX{">
<field name="PERMISSION">MANAGE_GUILD</field>
<value name="MEMBER">
<block type="s4d_message_author" id="*|qSUzo4n}^n7{@|KlaK"/>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_try_and_catch" id="jnp^ZPB/;4LZ:__Aji()">
<statement name="try">
<block type="controls_if" id="4N@5ZbmFPbR%\`kEVAH)D">
<value name="IF0">
<block type="logic_negate" id="08r7){qgKBH%gO4T]x^r">
<value name="BOOL">
<block type="s4d_has_data" id="N{62r}+zMSO)la}b5r?/">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="tq~-X,62|It0Yp!gCTgM">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="PVQBw2M4u\`sT){9]fK6;">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="NDszXyzFKm\`;(m4}Kdzw">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="%w0dHos/Yay)5Ar^)~I$"/>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_set_data" id="F-,|L:.,q|:;0R{iMd3!">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="Jz=)7/Pa|+J~vuFLxEje">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="YZ\`4i8E+.2#{7yMq\`Cx^">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="eF+(Xs8cc3$2PL7O\`y_@">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="7zE!5,Rei[AS,fvSGf\`v"/>
</value>
</block>
</value>
</block>
</value>
<value name="VALUE">
<shadow type="text">
<field name="TEXT">world</field>
</shadow>
<block type="math_number" id="/enOje3+wa-Pqu\`D;b3[">
<field name="NUM">0</field>
</block>
</value>
</block>
</statement>
<next>
<block type="s4d_send_wait_reply" id="tZH\`A~Xa,;/Db]Z*l-F8">
<value name="CONTENT">
<shadow type="text" id="]s-f%-6Y@48;IRW_#d9/">
<field name="TEXT">how many coins do you want to add</field>
</shadow>
</value>
<value name="CHANNEL">
<block type="s4d_message_channel" id="_~KA(zk@/P{p6hu%!Dcy"/>
</value>
<value name="MEMBER">
<block type="s4d_message_member" id="aYjPF6P{4iae.o$nILk!"/>
</value>
<value name="TIME">
<shadow type="math_number" id="oh6yn:=80wX}Jm$HHbxf">
<field name="NUM">10</field>
</shadow>
</value>
<statement name="THEN">
<block type="variables_set" id="O$#@zeC8taK[n[Tm^{(:">
<field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
<value name="VALUE">
<block type="s4d_send_wait_reply_value" id="L4~Zqt4rXHm@c\`%wJmO@"/>
</value>
<next>
<block type="controls_if" id="1L,nXj),-Lx6%xVFMp[N">
<mutation else="1"/>
<value name="IF0">
<block type="logic_operation" id="m_AKQSF]lnZ/NLaX\`Tx{">
<field name="OP">AND</field>
<value name="A">
<block type="logic_operation" id="\`2rA#S2?nf@oPw|]QnZ3">
<field name="OP">OR</field>
<value name="A">
<block type="math_number_property" id="{K)QC]?3r5nWzJLevd@E">
<mutation divisor_input="false"/>
<field name="PROPERTY">EVEN</field>
<value name="NUMBER_TO_CHECK">
<shadow type="math_number" id="M9s?3w.!#iG(IPm]!qY9">
<field name="NUM">0</field>
</shadow>
<block type="variables_get" id="{R}@eU^I67]:UU6M%6sD">
<field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
</block>
</value>
</block>
</value>
<value name="B">
<block type="math_number_property" id="S5hMMt?ETK])0zkXb?Zo">
<mutation divisor_input="false"/>
<field name="PROPERTY">ODD</field>
<value name="NUMBER_TO_CHECK">
<shadow type="math_number" id="R\`lZNjZS3r_C89oAjzz8">
<field name="NUM">0</field>
</shadow>
<block type="variables_get" id="mDspw4M|89gqj8sh2zx%">
<field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
</block>
</value>
</block>
</value>
</block>
</value>
<value name="B">
<block type="logic_operation" id="j2v9/nH9:m;o}~A_4Gph">
<field name="OP">AND</field>
<value name="A">
<block type="logic_compare" id="U+IOG^b+WEe(h^qC3V|S">
<field name="OP">GTE</field>
<value name="A">
<block type="variables_get" id="/#t3okER}qiP#ju3_1y\`">
<field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
</block>
</value>
<value name="B">
<block type="math_number" id="D-Ym^Tc:(,J-Yb.J+Uo}">
<field name="NUM">-1000000</field>
</block>
</value>
</block>
</value>
<value name="B">
<block type="logic_compare" id="TW#]FhQ},;ip\`7c+UR;L">
<field name="OP">LTE</field>
<value name="A">
<block type="variables_get" id="bIYZ|tV;4FW$}!.H;DbR">
<field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
</block>
</value>
<value name="B">
<block type="math_number" id="QjagWE[?FT@z0xk~{W,j">
<field name="NUM">1000000</field>
</block>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_add_data" id="-MT?y1BA\`sIMw@hr*n:b">
<value name="COUNT">
<shadow type="math_number" id=")RHY{0o6qj(F.Mw]NiE:">
<field name="NUM">1</field>
</shadow>
<block type="variables_get" id="ZGnE8rqZyjFJ%7A48Dv!">
<field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
</block>
</value>
<value name="KEY">
<shadow type="text" id="27Nzxc,,yz6C/2~32C;*">
<field name="TEXT">points</field>
</shadow>
<block type="text_join" id="[Uiv_L8YA);P4pV;GlG+">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="[h,6.m+}-rsC}hh1X-[Q">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="jYuDDjKgvSK+ED?a0RJD">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="ex5RB*25r3,,{lvsM2)T"/>
</value>
</block>
</value>
</block>
</value>
<next>
<block type="s4d_reply" id="-[pK@Q\`_KH?X6[!+$7vK">
<value name="CONTENT">
<shadow type="text" id="w4znNat?3QzAq,x7b]?r">
<field name="TEXT">enter a valid number</field>
</shadow>
<block type="text_join" id="(T8k*_T./8B46,0m.MW(">
<mutation items="3"/>
<value name="ADD0">
<block type="text" id="|C|N#!0c8ur}4]4L=}Au">
<field name="TEXT">added </field>
</block>
</value>
<value name="ADD1">
<block type="variables_get" id="~A/Eljb~kNXI.EBhX.([">
<field name="VAR" id="7$AQky9cD-(*o+k.:OM%">coin_answer</field>
</block>
</value>
<value name="ADD2">
<block type="text" id="|#{mh\`_ko:ZGslm.m|fG">
<field name="TEXT"> coins to the member</field>
</block>
</value>
</block>
</value>
</block>
</next>
</block>
</statement>
<statement name="ELSE">
<block type="s4d_reply" id="!g|gc^d+n0fN\`C1yV^Bk">
<value name="CONTENT">
<shadow type="text" id="]X_jzo0#@FZt#hZTaiG}">
<field name="TEXT">enter a valid number between -1000000 and 1000000 and also redo the edit coins process to edit coins of a member</field>
</shadow>
</value>
</block>
</statement>
</block>
</next>
</block>
</statement>
</block>
</next>
</block>
</statement>
<statement name="catch">
<block type="s4d_reply" id="%RX2*N+mOJg.Uv{s#EW\`">
<value name="CONTENT">
<shadow type="text" id="CX_#4u}]#I/;ACZ_96,u">
<field name="TEXT">ping a valid memeber</field>
</shadow>
</value>
</block>
</statement>
</block>
</statement>
<statement name="ELSE">
<block type="s4d_reply" id="d]FmQ?2V?($yA9z!ouCM">
<value name="CONTENT">
<shadow type="text" id="eU+etO=\`|o^jD$]LE{Y[">
<field name="TEXT">you need the manage server permission to use this command</field>
</shadow>
</value>
</block>
</statement>
</block>
</statement>
<value name="IF1">
<block type="s4d_starts_with" id="Ktp_4vgewe:!pen]B^9-">
<value name="STRING">
<shadow type="text" id="AsiY*~SONbRnz*%JG)lZ">
<field name="TEXT">abc</field>
</shadow>
<block type="s4d_message_content" id="T:[YQFj\`BjFe)%l{3but"/>
</value>
<value name="SUBSTRING">
<shadow type="text" id="5VvM%KkgMgHbRj+6TpLo">
<field name="TEXT">$reset</field>
</shadow>
</value>
</block>
</value>
<statement name="DO1">
<block type="controls_if" id="4W?[.s_OkMP23WaWzaHR">
<mutation else="1"/>
<value name="IF0">
<block type="s4d_member_has_permission" id="RP~4RkLO*ajj:^9);==z">
<field name="PERMISSION">MANAGE_GUILD</field>
<value name="MEMBER">
<block type="s4d_message_author" id="7qYcocR|*U9bkQg7/%L6"/>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_try_and_catch" id="Mk@$@Hu34]*+^Zz^*Z,O">
<statement name="try">
<block type="s4d_set_data" id="kn)T\`k[bMuU.gEu3KJF@">
<value name="KEY">
<shadow type="text" id="%uRU}q7_%i*ekf,{e@;T">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="3a@tp;)aOoF$Gz1e9EeL">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="HpXVbx5k\`gnWzP;U;R0z">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="gs]T?q:Lk{.f/[Y6|9A0">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="G:}W)$0VidkFuPJ*JSj7"/>
</value>
</block>
</value>
</block>
</value>
<value name="VALUE">
<shadow type="text" id="o9DBp0J2EZE2k#zHtPGz">
<field name="TEXT">world</field>
</shadow>
<block type="math_arithmetic" id="B[Udl_C9waaT0-{@+pPE">
<field name="OP">MINUS</field>
<value name="A">
<shadow type="math_number" id="qTN7l101{E$@^j=!m^]K">
<field name="NUM">1</field>
</shadow>
<block type="variables_get" id="nMVlP$cxokLO4p]zA*}U">
<field name="VAR" id="GO[\`,r2@whr7g@1i}sw_">coins</field>
</block>
</value>
<value name="B">
<shadow type="math_number" id="(-F415eHaX2(Q2oiA8.x">
<field name="NUM">1</field>
</shadow>
<block type="variables_get" id="vIc]MTFDLTJy2?WPCs?C">
<field name="VAR" id="GO[\`,r2@whr7g@1i}sw_">coins</field>
</block>
</value>
</block>
</value>
<next>
<block type="s4d_create_embed_then" id="3av3fXAJoENq9oEofIlE">
<statement name="THEN">
<block type="s4d_create_embed_then_set_color" id="5I[@mVl5)NZq4/J9fAgS">
<value name="COLOR">
<block type="colour_random" id="-#2[9x*[ew$!-Kx1,]Ms"/>
</value>
<next>
<block type="s4d_create_embed_then_set_description" id="Agg!ge6O/H1|t?zYLhbl">
<value name="DESCRIPTION">
<block type="text_join" id="=n6r1x79{3z+yfgM75QD">
<mutation items="4"/>
<value name="ADD0">
<block type="s4d_message_author" id="NudE-Q4SM+$;x}M+g~a#"/>
</value>
<value name="ADD1">
<block type="text" id="@c*ixS([VCFQS~GL]5;e">
<field name="TEXT"> reset the coin count for </field>
</block>
</value>
<value name="ADD2">
<block type="s4d_mentioned_member" id="TeFhlb!!V:LSHaxlKIl@"/>
</value>
<value name="ADD3">
<block type="text" id="l,eg)O{g?U0^u2f#5/-Q">
<field name="TEXT"> to 0</field>
</block>
</value>
</block>
</value>
<next>
<block type="s4d_create_embed_then_send" id="1J5k5{AzcAaV1m3fL.mf">
<value name="CHANNEL">
<block type="s4d_message_channel" id="$hX4;dKn{[?YKA1eH~x;"/>
</value>
</block>
</next>
</block>
</next>
</block>
</statement>
</block>
</next>
</block>
</statement>
<statement name="catch">
<block type="s4d_reply" id="1^{0dS7KlpgMWB;\`u}sV">
<value name="CONTENT">
<shadow type="text" id="9mNJ!r}q6r_o)TlVZEoC">
<field name="TEXT">ping a valid memeber</field>
</shadow>
</value>
</block>
</statement>
</block>
</statement>
<statement name="ELSE">
<block type="s4d_reply" id="=wu#R0ut*Cx!O9D*K=t{">
<value name="CONTENT">
<shadow type="text" id="kSFN8*cV4E=[i*mk[h54">
<field name="TEXT">you need the manage server permission to use this command</field>
</shadow>
</value>
</block>
</statement>
</block>
</statement>
<next>
<block type="controls_if" id="I.sZ+EM.]~H=yOXN,!J8">
<value name="IF0">
<block type="s4d_starts_with" id="IHyaJjcEA-Pa:/l4Lf:F">
<value name="STRING">
<shadow type="text" id="N~]pIbsML04e=Y-\`3PUN">
<field name="TEXT">abc</field>
</shadow>
<block type="s4d_message_content" id="mvtUz{W5?v6Ne3:HzQ}f"/>
</value>
<value name="SUBSTRING">
<shadow type="text" id="V?v@pAYpP#[4b0EKu%[9">
<field name="TEXT">$give</field>
</shadow>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_try_and_catch" id="BwBRQ,nx]VM\`@$n6!yvy">
<statement name="try">
<block type="controls_if" id="Yh_3a|0u{Q:kvrjVA6pf">
<value name="IF0">
<block type="logic_negate" id="urz9T.}U8Hvv_X25LWoq">
<value name="BOOL">
<block type="s4d_has_data" id="W%Z4l4OjXJ0gUOEUJ3x{">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="*8),~b71W~!?~ccb$9?p">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="s,33lWEuhP$lN!GSa9dg">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="mhIfLwTI$P/(l3pA%6RT">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="wP@wgv.KaV0(*M#$$=N^"/>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_set_data" id="=kVGeJqV:B?]p2hfd.m{">
<value name="KEY">
<shadow type="text">
<field name="TEXT">hello</field>
</shadow>
<block type="text_join" id="X_9w9V*Y(|NbOQV_VU,G">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="}x:IAQ;yGRVKTONfgS1$">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="xF%03)#k#%FE{!1LW5?2">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="Py9bR!g=R}B21Z*Az??~"/>
</value>
</block>
</value>
</block>
</value>
<value name="VALUE">
<shadow type="text">
<field name="TEXT">world</field>
</shadow>
<block type="math_number" id="N|pHg?m\`+Jecd7#}TCuR">
<field name="NUM">0</field>
</block>
</value>
</block>
</statement>
<next>
<block type="s4d_send_wait_reply" id="W%A*!-BuzQErSrL?eB%%">
<value name="CONTENT">
<shadow type="text" id="sk0SR$uh+R1;2+3z!X*V">
<field name="TEXT">how many coins do you want to give to the member</field>
</shadow>
</value>
<value name="CHANNEL">
<block type="s4d_message_channel" id="j!B3VlDzx0[$n.[9a;lt"/>
</value>
<value name="MEMBER">
<block type="s4d_message_member" id="py{*o?!V:.rykWgtGc!L"/>
</value>
<value name="TIME">
<shadow type="math_number" id="3n\`vZOJ^V^G#b_MwLO{a">
<field name="NUM">10</field>
</shadow>
</value>
<statement name="THEN">
<block type="variables_set" id="r%=;^(bqr?Vwf2$Ajfrb">
<field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
<value name="VALUE">
<block type="s4d_send_wait_reply_value" id="-b}ZGEci7/T7^X0WE\`rJ"/>
</value>
<next>
<block type="controls_if" id="x!b|9,u=)wOeT(;|qZ/G">
<mutation else="1"/>
<value name="IF0">
<block type="logic_operation" id="K;7]_A|_Bp[/?]VK#:}?">
<field name="OP">OR</field>
<value name="A">
<block type="math_number_property" id="e?=.(h[fL$wK[*?.KXW@">
<mutation divisor_input="false"/>
<field name="PROPERTY">EVEN</field>
<value name="NUMBER_TO_CHECK">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
<block type="variables_get" id="odE|(w.wU\`7cPT?UkaHY">
<field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
</block>
</value>
</block>
</value>
<value name="B">
<block type="math_number_property" id=")X~rivYVk7!=vd\`fH{#v">
<mutation divisor_input="false"/>
<field name="PROPERTY">ODD</field>
<value name="NUMBER_TO_CHECK">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
<block type="variables_get" id="L/zzKm|4HgOwkUu9X6}?">
<field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
</block>
</value>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="controls_if" id="dWK0q61LV7rL]\`sis8U5">
<mutation else="1"/>
<value name="IF0">
<block type="logic_compare" id="pK^bCDX?U|Bk64@]4_=_">
<field name="OP">GTE</field>
<value name="A">
<block type="variables_get" id="8K]D]uN0]iNrySZi7}Zu">
<field name="VAR" id="GO[\`,r2@whr7g@1i}sw_">coins</field>
</block>
</value>
<value name="B">
<block type="variables_get" id="NN]%hN=_7%PAs6O7Gp/+">
<field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
</block>
</value>
</block>
</value>
<statement name="DO0">
<block type="s4d_subtract_data" id="}wAGuJ\`3zu.uw8kT7U:b">
<value name="COUNT">
<shadow type="math_number" id="uLamBK?+8ck6Hp/bC?jh">
<field name="NUM">1</field>
</shadow>
<block type="variables_get" id="nQi=$T?4gK=--Kog;%F*">
<field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
</block>
</value>
<value name="KEY">
<shadow type="text" id="*8A9U(f_JUF-ELq%k~Sl">
<field name="TEXT">points</field>
</shadow>
<block type="text_join" id="Q-)?1QGELSio0.=$l2T}">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="qt#N4HL9zPkukUC:E0(X">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="Js,.xasY!?53RPKc/#RH">
<value name="MEMBER">
<block type="s4d_message_author" id="xwpC*5UIAda~@^I*qlf|"/>
</value>
</block>
</value>
</block>
</value>
<next>
<block type="s4d_add_data" id="0}g[{a6E(K4[:ADpANAV">
<value name="COUNT">
<shadow type="math_number">
<field name="NUM">1</field>
</shadow>
<block type="variables_get" id="IE9:Acq(=gi,HCbY||}H">
<field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
</block>
</value>
<value name="KEY">
<shadow type="text">
<field name="TEXT">points</field>
</shadow>
<block type="text_join" id="G0wP=igvM.F3;W7LZ{on">
<mutation items="2"/>
<value name="ADD0">
<block type="text" id="3?9v7RE4!e\`5PBI8@T#)">
<field name="TEXT">coins-</field>
</block>
</value>
<value name="ADD1">
<block type="s4d_member_id" id="fS1PzM6{TbqP6=~UE:y/">
<value name="MEMBER">
<block type="s4d_mentioned_member" id="+Cju1[j=$S0Fg|%(_!%O"/>
</value>
</block>
</value>
</block>
</value>
<next>
<block type="s4d_create_embed_then" id=":xn%FwFh.JKvvAM^9ccs">
<statement name="THEN">
<block type="s4d_create_embed_then_set_color" id="mY!I;RxdlKk{xn5@@ayB">
<value name="COLOR">
<block type="colour_random" id="5uG^J(zY,kDCNxKDe,,}"/>
</value>
<next>
<block type="s4d_create_embed_then_set_description" id="xit2[kyj)4k91$JAt4/3">
<value name="DESCRIPTION">
<block type="text_join" id="0NyrJY+RI}Jh|]7PGhPL">
<mutation items="5"/>
<value name="ADD0">
<block type="s4d_message_author" id="tr9yv,++-!3B.EwyN7Qj"/>
</value>
<value name="ADD1">
<block type="text" id="QcSc-Nkq![$T)oIW/ng]">
<field name="TEXT"> you successfully gave </field>
</block>
</value>
<value name="ADD2">
<block type="variables_get" id="NVTz^Ej:k!Ih30I]Y,IB">
<field name="VAR" id="mebi*b=kInGRZ(gBM-6#">give_answer</field>
</block>
</value>
<value name="ADD3">
<block type="text" id="k7lSus.Ho+AASTCG.z}8">
<field name="TEXT"> coins to </field>
</block>
</value>
<value name="ADD4">
<block type="s4d_mentioned_member" id="O.kW_gs7-we*vr?!/PUR"/>
</value>
</block>
</value>
<next>
<block type="s4d_create_embed_then_send" id="(Xs};bOzzNuGtZG+07D?">
<value name="CHANNEL">
<block type="s4d_message_channel" id="Z;tDrB)L$@(.q)[)LU(^"/>
</value>
</block>
</next>
</block>
</next>
</block>
</statement>
</block>
</next>
</block>
</next>
</block>
</statement>
<statement name="ELSE">
<block type="s4d_reply" id="Db06$9O[Mx/}cR71yNC.">
<value name="CONTENT">
<shadow type="text" id="oaEF,-}~i;gk{eu+ojdO">
<field name="TEXT">you dont have enough coins to donate to the member</field>
</shadow>
</value>
</block>
</statement>
</block>
</statement>
<statement name="ELSE">
<block type="s4d_reply" id="dYNT-|tNqta|k}$8q,i*">
<value name="CONTENT">
<shadow type="text" id="N}AJeQ-_hhh(DDV3yP@[">
<field name="TEXT">enter a valid number and also redo the give process to give coins to the member</field>
</shadow>
</value>
</block>
</statement>
</block>
</next>
</block>
</statement>
</block>
</next>
</block>
</statement>
<statement name="catch">
<block type="s4d_reply" id="Q2)9QAy^OrB]G:}KW7k[">
<value name="CONTENT">
<shadow type="text" id="DBT\`I}FIVN6qJi7,sI]c">
<field name="TEXT">ping a valid memeber</field>
</shadow>
</value>
</block>
</statement>
</block>
</statement>
</block>
</next>
</block>
</next>
</block>
</next>
</block>
</next>
</block>
</next>
</block>
</next>
</block>
</statement>
</block>
</statement>
</block>
</xml>
`;
