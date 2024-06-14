using CMISentinelPrime.Models;
using System;
using System.Collections.Generic;
using System.Web;

namespace CMISentinelPrime.ViewModels
{
    public class CMIWithPerspectivesViewModel
    {
        public CMI CMI { get; set; }
        public IEnumerable<Perspective> Perspectives { get; set; }
        public Dictionary<int, List<Objective>> ObjectivesByPerspective { get; set; } = new Dictionary<int, List<Objective>>();
        public Dictionary<int, List<Indicator>> IndicatorsByObjective { get; set; } = new Dictionary<int, List<Indicator>>();

    }
}
