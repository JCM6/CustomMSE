

# 2. Parts of a Card
# 200. General
# 201. Name
# 202. Mana Cost and Color
# 203. Illustration
# 204. Color Indicator
# 205. Type Line
# 206. Expansion Symbol
# 207. Text Box
# 208. Power/Toughness
# 209. Loyalty
# 210. Hand Modifier
# 211. Life Modifier
# 212. Information Below the Text Box



class player:
    def __init__(self, name, lifeTotal, poisonCounters, infectCounters, experienceCounters, emblems, maxHandsize, canWin):
        self.name = name
        self.lifeTotal = 20
        self.poisonCounters = poisonCounters
        self.infectCounters = infectCounters
        self.experienceCounters = experienceCounters
        self.emblems = emblems
        self.maxHandsize = maxHandsize
        self.canWin = canWin

class card:
    def __init__(self, rulesText, expansion, formatLegality, colors, types, subTypes, cmc, power, toughness, flavorText, mark, artist, manaCost, blockPrints, rarity, specialItem):
        self.rulesText = rulesText
        self.expansion = expansion
        self.formatLegality = formatLegality
        self.colors = colors
        self.types = types
        self.subTypes = subTypes
        self.cmc = cmc
        self.power = power
        self.toughness = toughness
        self.flavorText = flavorText
        self.mark = mark
        self.artist = artist
        self.manaCost = manaCost
        self.blockPrints = blockPrints
        self.rarity = rarity
        self.specialItem = specialItem


class library:

class graveyard:

class exile:
