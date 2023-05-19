select celebrante.id,celebrante.missa,celebrante.data,celebrante.mes,celebrante.ano,celebrante.dia,
celebrante.hora,celebrante.comunidade,celebrante.celebrante,ministro.ministros,liturgia.comentarista,
liturgia.leitores,liturgia.musicos,coroinha.acolito,coroinha.coroinha
from escala_celebrante as celebrante inner join escala_ministro as ministro 
on celebrante.data = ministro.data && celebrante.comunidade = ministro.comunidade 
&& celebrante.hora = ministro.hora inner join escala_liturgia as liturgia on celebrante.data = liturgia.data
&& celebrante.comunidade = liturgia.comunidade && celebrante.hora = liturgia.hora inner join escala_coroinha
as coroinha on celebrante.data = coroinha.data && celebrante.comunidade = coroinha.comunidade 
&& celebrante.hora = coroinha.hora ;
