import json

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
    def __init__(self, playerid, name, lifeTotal, poisonCounters, infectCounters, experienceCounters, emblems, maxHandsize, canWin):
        self.playerid = playerid
        self.name = name
        self.lifeTotal = lifeTotal
        self.poisonCounters = poisonCounters
        self.infectCounters = infectCounters
        self.experienceCounters = experienceCounters
        self.emblems = emblems
        self.maxHandsize = maxHandsize
        self.canWin = canWin



class cardState:
    def __init__(self, zone, tapped, flipped, transformed, attached, facedown, revealed, playerControllerId, playerOwnerId):
        self.zone = zone
        self.tapped = tapped
        self.flipped = flipped
        self.transformed = transformed
        self.attached = attached
        self.facedown = facedown
        self.revealed = revealed
        self.playerControllerId = playerControllerId
        self.playerOwnerId = playerOwnerId

class card:
    def __init__(self, multiverseid, name, rulesText, expansion, formatLegality, colors, types, subTypes, cmc, power, toughness, flavorText, mark, artist, manaCost, blockPrints, rarity, specialItem):
        self.multiverseid = multiverseid
        self.name = name
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
        

class deck:
    def __init__(self, playerOwner, cards):
        self.playerOwner = playerOwner
        self.cards = cards

class emblem:
    def __init__(self, playerOwnerId, playerControllerId, name, rulesText):
        self.playerOwnerId = playerOwnerId
        self.playerControllerId = playerControllerId
        self.name = name
        self.rulesText = rulesText

class pipCounter:
    def __init__(self, counterGroupId, counterType, name):
        self.counterGroupId = counterGroupId
        self.counterType = counterType
        self.name = name

class cardObject:
    def __init__(self, card, cardState):
        self.card = card
        self.cardState = cardState

ruleTEXT = 'When this creature enters the battlefield add RRR to your mana pool and draw a card.'

testCard = card('multiverseid', 'RockMonster', ruleTEXT, 'expansion', 'formatLegality', 'colors', 'types', 'subTypes', '5', 'power', 'toughness', 'flavorText', 'mark', 'artist', 'manaCost', 'blockPrints', 'rarity', 'specialItem')
testCardState = cardState('zone', 'tapped', 'flipped', 'transformed', 'attached', 'facedown', 'revealed', 'playerControllerId', 'playerOwnerId')
testCardObject = cardObject(testCard, testCardState)

print('Test Card ' + str(testCard))
print('Test Card State ' + str(testCardState))
print('TestCardObject ' + str(testCardObject))
print('')
print(json.dumps(vars(testCardObject.card), indent=4))
 
class spell:
    def __init__(self, card, isCast, isCopy):
        self.card = card
        self.isCast = isCast
        self.isCopy = isCopy

class pile:
    def __init__(self, cards, pileCount):
        self.card = card
        self.pileCount = pileCount

class revealed:
    def __init__(self, cards):
        self.cards = cards

class stack:
    def __init__(self, spells, totalStack, castStack):
        self.spells = spells
        self.totalStack = totalStack
        self.castStack = castStack

"""
class battlefield:

class library:

class graveyard:

class exile:

class zones:

class turnCounter:
    def __init__(self, restartCount, turnZero):
        self.restartCount = restartCount
        self.turnZero = turnZero """