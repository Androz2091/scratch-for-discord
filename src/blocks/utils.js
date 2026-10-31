// Output type of the block plugged into an input (null when the block accepts any type)
export const getInputType = (block, inputName) => {
    const target = block.getInputTargetBlock(inputName);
    return target?.outputConnection.getCheck()?.[0] ?? null;
};

// Embeds (and untyped values like variables) are sent as-is, everything else as text
export const messageContent = (block, content) => {
    const type = getInputType(block, "CONTENT");
    return block.getInputTargetBlock("CONTENT") && (type === "MessageEmbed" || !type) ? content : `String(${content})`;
};
