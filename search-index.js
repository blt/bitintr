var searchIndex = {};
searchIndex["bitintr"] = {"doc":"`bitintr` offers portable bit manipulation intrinsics (@github, @crates.io).","items":[[0,"x86","bitintr","x86, x86_64, and AMD64 assembly instructions.",null,null],[0,"abm","bitintr::x86","Advanced Bit Manipulation (ABM) instruction set.",null,null],[5,"popcnt","bitintr::x86::abm","Counts the bits that are set.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"lzcnt","","Counts the leading most significant zero bits.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[8,"POPCNT","","Method version of `popcnt`.",null,null],[10,"popcnt","","",0,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"LZCNT","","Method version of `lzcnt`.",null,null],[10,"lzcnt","","",1,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[0,"tbm","bitintr::x86","Trailing Bit Manipulation (TBM) instruction set.",null,null],[5,"bextr","bitintr::x86::tbm","Bit Field Extract.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[5,"blcfill","","Clears all bits below the least significant zero bit of `x`.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"blcic","","Sets the least significant bit of `x` and clears all other bits.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"blci","","Sets all bits of `x` to 1 except for the least significant zero bit.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"blcmsk","","Sets the least significant bit of `x` and clears all bits above that bit.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"blcs","","Sets the least significant bit of `x`.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"blsfill","","Sets all bits of `x` below the least significant one.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"blsic","","Clears least significant bit and sets all other bits.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"t1mskc","","Clears all bits below the least significant zero of `x` and sets all other bits.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"tzmsk","","Sets all bits below the least significant one of `x` and clears all other bits.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[8,"BEXTR","","Method version of `bextr`.",null,null],[10,"bextr","","",2,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[8,"BLCFILL","","Method version of `blcfill`.",null,null],[10,"blcfill","","",3,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"BLCIC","","Method version of `blcic`.",null,null],[10,"blcic","","",4,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"BLCI","","Method version of `blci`.",null,null],[10,"blci","","",5,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"BLCMSK","","Method version of `blcmsk`.",null,null],[10,"blcmsk","","",6,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"BLCS","","Method version of `blcs`.",null,null],[10,"blcs","","",7,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"BLSFILL","","Method version of `blsfill`.",null,null],[10,"blsfill","","",8,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"BLSIC","","Method version of `blsic`.",null,null],[10,"blsic","","",9,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"T1MSKC","","Method version of `t1mskc`.",null,null],[10,"t1mskc","","",10,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"TZMSK","","Method version of `tzmsk`.",null,null],[10,"tzmsk","","",11,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[0,"bmi","bitintr::x86","Bit Manipulation Instruction (BMI) Set 1.0.",null,null],[5,"bextr","bitintr::x86::bmi","Bit Field Extract.",null,{"inputs":[{"name":"t"},{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[5,"andn","","Bitwise logical `AND` of inverted `x` with `y`.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[5,"blsi","","Extract lowest set isolated bit.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"blsmsk","","Get mask up to lowest set bit.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"blsr","","Resets the lowest set bit of `x`.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"tzcnt","","Counts the number of trailing least significant zero bits.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[8,"BEXTR","","Method version of `bextr`.",null,null],[10,"bextr","","",12,{"inputs":[{"name":"self"},{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[8,"ANDN","","Method version of `andn`.",null,null],[10,"andn","","",13,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[8,"BLSI","","Method version of `blsi`.",null,null],[10,"blsi","","",14,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"BLSMSK","","Method version of `blsmsk`.",null,null],[10,"blsmsk","","",15,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"BLSR","","Method version of `blsr`.",null,null],[10,"blsr","","",16,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"TZCNT","","Method version of `tzcnt`.",null,null],[10,"tzcnt","","",17,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[0,"bmi2","bitintr::x86","Bit Manipulation Instruction (BMI) Set 2.0.",null,null],[5,"mulx","bitintr::x86::bmi2","Unsigned multiply without affecting flags.",null,null],[5,"bzhi","","Zero the high bits of `x` at position >= `bit_position`.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[5,"pdep","","Parallel bits deposit.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[5,"pext","","Parallel bits extract.",null,{"inputs":[{"name":"t"},{"name":"t"}],"output":{"name":"t"}}],[8,"MULX","","Method version of `mulx`.",null,null],[10,"mulx","","",18,null],[8,"BZHI","","Method version of `bzhi`.",null,null],[10,"bzhi","","",19,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[8,"PDEP","","Method version of `pdep`.",null,null],[10,"pdep","","",20,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[8,"PEXT","","Method version of `pext`.",null,null],[10,"pext","","",21,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[0,"arm","bitintr","ARM assembly instructions.",null,null],[0,"v5","bitintr::arm","ARMv6 assembly instructions.",null,null],[0,"v6","","ARMv6 assembly instructions.",null,null],[5,"rev","bitintr::arm::v6","Reverse the order of the bytes.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[8,"REV","","Method version of `rev`.",null,null],[10,"rev","","",22,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[0,"v7","bitintr::arm","ARMv7 assembly instructions.",null,null],[5,"clz","bitintr::arm::v7","Count Leading Zeros.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[5,"rbit","","Reverse the bit order.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[8,"CLZ","","Method version of `clz`.",null,null],[10,"clz","","",23,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"RBit","","Method version of `rbit`.",null,null],[10,"rbit","","",24,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[0,"v8","bitintr::arm","ARMv8 assembly instructions.",null,null],[5,"cls","bitintr::arm::v8","Counts the leading most significant bits set.",null,{"inputs":[{"name":"t"}],"output":{"name":"t"}}],[8,"CLS","","Method version of `cls`.",null,null],[10,"cls","","",25,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[8,"Int","bitintr","Integer trait used to parametrize algorithms for all integer types.",null,null],[16,"Unsigned","","",26,null],[16,"Signed","","",26,null],[10,"one","","",26,{"inputs":[],"output":{"name":"self"}}],[10,"zero","","",26,{"inputs":[],"output":{"name":"self"}}],[10,"byte_size","","",26,{"inputs":[],"output":{"name":"self"}}],[10,"bit_size","","",26,{"inputs":[],"output":{"name":"self"}}],[10,"count_ones","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"count_zeros","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"leading_zeros","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"trailing_zeros","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"wrapping_neg","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"wrapping_add","","",26,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[10,"wrapping_sub","","",26,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[10,"wrapping_shl","","",26,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[10,"wrapping_shr","","",26,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"self"}}],[10,"to_u8","","",26,{"inputs":[{"name":"self"}],"output":{"name":"u8"}}],[10,"to_u16","","",26,{"inputs":[{"name":"self"}],"output":{"name":"u16"}}],[10,"to_u32","","",26,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[10,"to_u64","","",26,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[10,"to_i8","","",26,{"inputs":[{"name":"self"}],"output":{"name":"i8"}}],[10,"to_i16","","",26,{"inputs":[{"name":"self"}],"output":{"name":"i16"}}],[10,"to_i32","","",26,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[10,"to_i64","","",26,{"inputs":[{"name":"self"}],"output":{"name":"i64"}}],[10,"from_u8","","",26,{"inputs":[{"name":"u8"}],"output":{"name":"self"}}],[10,"from_u16","","",26,{"inputs":[{"name":"u16"}],"output":{"name":"self"}}],[10,"from_u32","","",26,{"inputs":[{"name":"u32"}],"output":{"name":"self"}}],[10,"from_u64","","",26,{"inputs":[{"name":"u64"}],"output":{"name":"self"}}],[10,"from_i8","","",26,{"inputs":[{"name":"i8"}],"output":{"name":"self"}}],[10,"from_i16","","",26,{"inputs":[{"name":"i16"}],"output":{"name":"self"}}],[10,"from_i32","","",26,{"inputs":[{"name":"i32"}],"output":{"name":"self"}}],[10,"from_i64","","",26,{"inputs":[{"name":"i64"}],"output":{"name":"self"}}],[10,"rotate_left","","",26,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[10,"rotate_right","","",26,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[10,"swap_bytes","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"from_be","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"from_le","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"to_be","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"to_le","","",26,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[10,"pow","","",26,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[10,"to_unsigned","","",26,null],[10,"to_signed","","",26,null],[10,"from_unsigned","","",26,null],[10,"from_signed","","",26,null]],"paths":[[8,"POPCNT"],[8,"LZCNT"],[8,"BEXTR"],[8,"BLCFILL"],[8,"BLCIC"],[8,"BLCI"],[8,"BLCMSK"],[8,"BLCS"],[8,"BLSFILL"],[8,"BLSIC"],[8,"T1MSKC"],[8,"TZMSK"],[8,"BEXTR"],[8,"ANDN"],[8,"BLSI"],[8,"BLSMSK"],[8,"BLSR"],[8,"TZCNT"],[8,"MULX"],[8,"BZHI"],[8,"PDEP"],[8,"PEXT"],[8,"REV"],[8,"CLZ"],[8,"RBit"],[8,"CLS"],[8,"Int"]]};
initSearch(searchIndex);